<template>
  <div ref="root" class="gem">
    <div
      ref="stage"
      class="gem__stage"
      :class="{ 'gem__stage--static': !webgl }"
      role="img"
      :aria-label="t('a11y.gem')"
      @pointerdown="onPointerDown"
      @pointerup="endDrag"
      @pointercancel="endDrag"
    >
      <GemMark v-if="!webgl" class="gem__fallback" />
    </div>
    <span ref="code" class="gem__code glass glass--regular" aria-hidden="true">&lt;/&gt;</span>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  DirectionalLight,
  ExtrudeGeometry,
  Group,
  HemisphereLight,
  Mesh,
  MeshPhysicalMaterial,
  PerspectiveCamera,
  Scene,
  Shape,
  Vector3,
  WebGLRenderer
} from 'three'
import { useAppStore } from '@/stores/useAppStore'
import { prefersReducedMotion } from '@/composables/useGlass'
import GemMark from './GemMark.vue'

// Facet outlines in the same 100×100 space as GemMark.vue.
const FACETS = {
  lt: [[9, 50], [50, 9], [55.47, 14.47], [42.55, 50]],
  lb: [[9, 50], [42.55, 50], [33.6, 74.6]],
  rt: [[66.4, 25.4], [91, 50], [57.45, 50]],
  rb: [[57.45, 50], [91, 50], [50, 91], [44.53, 85.53]]
}
const EXTRUDE = { depth: 0.26, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.022, bevelSegments: 4, curveSegments: 1 }
// Direction along the gem's diagonal cut; the halves separate along it on hover.
const SPLIT_NORMAL = new Vector3(0.9398, -0.3417, 0)
// three r155+ uses physical light units; scale the design's legacy intensities.
const LIGHT = Math.PI

const { t } = useI18n()
const store = useAppStore()
const root = ref(null)
const stage = ref(null)
const code = ref(null)
const webgl = ref(true)

let renderer, scene, camera, gem, left, right, materials, geometries
let frameId = 0
let visible = false
let lastTime = 0
let elapsed = 0
let resizeObserver, intersectionObserver
const reduce = prefersReducedMotion()
const motion = { tiltX: 0, tiltY: 0, spin: 0, vel: 0, split: 0, hover: false, dragging: false, lastX: 0 }

function geometry(points) {
  const shape = new Shape()
  points.forEach(([px, py], i) => {
    const x = (px - 50) / 50
    const y = -(py - 50) / 50
    if (i) shape.lineTo(x, y)
    else shape.moveTo(x, y)
  })
  shape.closePath()
  const g = new ExtrudeGeometry(shape, EXTRUDE)
  g.translate(0, 0, -0.13)
  return g
}

function material(gloss) {
  return new MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: gloss ? 0.16 : 0.42,
    metalness: 0.05,
    clearcoat: gloss ? 1 : 0.5,
    clearcoatRoughness: 0.1,
    flatShading: true
  })
}

function syncColors() {
  if (!materials) return
  const styles = getComputedStyle(document.documentElement)
  for (const key of Object.keys(materials)) {
    materials[key].color.set(styles.getPropertyValue(`--facet-${key}`).trim() || '#ffffff')
  }
  if (!frameId) render()
}

function resize() {
  const r = stage.value?.getBoundingClientRect()
  if (!r?.width) return
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.setSize(r.width, r.height, false)
  camera.aspect = r.width / r.height
  camera.updateProjectionMatrix()
  if (!frameId) render()
}

function render() {
  renderer.render(scene, camera)
}

function frame(now) {
  frameId = requestAnimationFrame(frame)
  const dt = Math.min((now - (lastTime || now)) / 1000, 0.05)
  lastTime = now
  elapsed += dt

  const m = motion
  m.spin += m.vel
  m.vel *= 0.92
  if (!m.dragging) m.spin *= 0.985

  const idleY = reduce ? 0.3 : 0.3 + Math.sin(elapsed * 0.6) * 0.5
  gem.rotation.y += (idleY + m.spin + m.tiltY - gem.rotation.y) * 0.07
  gem.rotation.x += ((reduce ? 0 : Math.sin(elapsed * 0.4) * 0.1) + m.tiltX - gem.rotation.x) * 0.07

  m.split += ((m.hover || m.dragging ? 1 : 0) - m.split) * (reduce ? 1 : 0.08)
  left.position.copy(SPLIT_NORMAL).multiplyScalar(-m.split * 0.17)
  right.position.copy(SPLIT_NORMAL).multiplyScalar(m.split * 0.17)
  code.value.style.opacity = String(Math.max(0, (m.split - 0.35) / 0.65))

  render()
}

function start() {
  if (frameId || !renderer) return
  lastTime = 0
  frameId = requestAnimationFrame(frame)
}

function stop() {
  cancelAnimationFrame(frameId)
  frameId = 0
}

function onWindowPointerMove(e) {
  const r = root.value.getBoundingClientRect()
  const dx = e.clientX - (r.left + r.width / 2)
  const dy = e.clientY - (r.top + r.height / 2)
  motion.hover = Math.hypot(dx, dy) < r.width * 0.75
  if (!reduce) {
    motion.tiltY = Math.max(-1, Math.min(1, dx / 400)) * 0.6
    motion.tiltX = Math.max(-1, Math.min(1, dy / 400)) * 0.4
  }
  if (motion.dragging) {
    motion.vel += (e.clientX - motion.lastX) * 0.008
    motion.lastX = e.clientX
  }
}

function onPointerDown(e) {
  if (!renderer) return
  motion.dragging = true
  motion.lastX = e.clientX
  try { stage.value.setPointerCapture(e.pointerId) } catch { /* not capturable */ }
}

function endDrag() {
  motion.dragging = false
}

function onVisibilityChange() {
  if (document.hidden) stop()
  else if (visible) start()
}

function init() {
  try {
    renderer = new WebGLRenderer({ antialias: true, alpha: true })
  } catch {
    return false
  }
  if (!renderer.getContext()) {
    renderer.dispose()
    renderer = null
    return false
  }
  stage.value.appendChild(renderer.domElement)

  scene = new Scene()
  camera = new PerspectiveCamera(30, 1, 0.1, 100)
  camera.position.set(0, 0, 8.2)

  geometries = Object.fromEntries(Object.entries(FACETS).map(([k, pts]) => [k, geometry(pts)]))
  materials = { lt: material(false), lb: material(false), rt: material(true), rb: material(true) }

  left = new Group()
  right = new Group()
  left.add(new Mesh(geometries.lt, materials.lt), new Mesh(geometries.lb, materials.lb))
  right.add(new Mesh(geometries.rt, materials.rt), new Mesh(geometries.rb, materials.rb))
  gem = new Group()
  gem.add(left, right)
  gem.rotation.y = 0.3
  scene.add(gem)

  scene.add(new HemisphereLight(0xffffff, 0x8fb4c8, 0.9 * LIGHT))
  const key = new DirectionalLight(0xffffff, 1.15 * LIGHT)
  key.position.set(3, 4, 6)
  scene.add(key)
  const rim = new DirectionalLight(0xa6e2f8, 0.9 * LIGHT)
  rim.position.set(-4, -3, -2)
  scene.add(rim)

  syncColors()
  resize()
  return true
}

onMounted(() => {
  if (!init()) {
    webgl.value = false
    return
  }

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(stage.value)

  // Render only while the badge is on screen.
  intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible && !document.hidden) start()
    else stop()
  })
  intersectionObserver.observe(root.value)

  window.addEventListener('pointermove', onWindowPointerMove, { passive: true })
  document.addEventListener('visibilitychange', onVisibilityChange)
})

// Facet colours come from CSS variables, so re-read them after the theme flips.
watch(() => store.theme, () => nextTick(syncColors))

onBeforeUnmount(() => {
  stop()
  resizeObserver?.disconnect()
  intersectionObserver?.disconnect()
  window.removeEventListener('pointermove', onWindowPointerMove)
  document.removeEventListener('visibilitychange', onVisibilityChange)
  if (!renderer) return
  Object.values(geometries).forEach((g) => g.dispose())
  Object.values(materials).forEach((m) => m.dispose())
  renderer.dispose()
  renderer.domElement.remove()
  renderer = scene = camera = gem = left = right = materials = geometries = null
})
</script>

<style scoped>
.gem {
  position: absolute;
  inset: 0;
}

.gem__stage {
  position: absolute;
  inset: -30%;
  cursor: grab;
  touch-action: pan-y;
}

.gem__stage:active {
  cursor: grabbing;
}

.gem__stage--static,
.gem__stage--static:active {
  cursor: default;
}

.gem__stage :deep(canvas) {
  width: 100%;
  height: 100%;
  display: block;
}

.gem__fallback {
  position: absolute;
  inset: 30%;
  width: 40%;
  height: 40%;
}

.gem__code {
  position: absolute;
  left: 50%;
  top: calc(100% + 6px);
  transform: translateX(-50%);
  padding: 5px 12px;
  border-radius: 999px;
  font-weight: 800;
  font-stretch: 125%;
  font-size: 14px;
  letter-spacing: .08em;
  color: var(--accent-text);
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
}
</style>
