<template>
  <svg class="liquid-defs" width="0" height="0" aria-hidden="true" focusable="false">
    <filter id="liquid" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.006 0.011" numOctaves="2" seed="11" result="noise" />
      <feGaussianBlur in="noise" stdDeviation="2.5" result="soft" />
      <feDisplacementMap in="SourceGraphic" in2="soft" scale="40" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>
  <div class="field" aria-hidden="true">
    <div v-for="n in 5" :key="n" :class="['blob', `blob--${n}`]" />
  </div>
  <div class="grain" aria-hidden="true" />
</template>

<style scoped>
.liquid-defs {
  position: absolute;
}
</style>
