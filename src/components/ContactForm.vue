<template>
  <form class="form" novalidate :aria-busy="status === 'sending'" @submit.prevent="submit">
    <div class="form__head">
      <h3 class="form__title">{{ t('contact.form.title') }}</h3>
      <p class="form__hint">{{ t('contact.form.hint') }}</p>
    </div>

    <div class="form__grid">
      <div v-for="f in FIELDS" :key="f.name" class="field" :class="[`field--${f.name}`, { 'field--error': errors[f.name] }]">
        <label class="field__label" :for="`cf-${f.name}`">
          {{ t(`contact.form.${f.name}`) }}
          <span v-if="f.optional" class="field__optional">({{ t('contact.form.optional') }})</span>
        </label>
        <textarea
          v-if="f.multiline"
          :ref="(el) => (inputs[f.name] = el)"
          v-model="form[f.name]"
          v-bind="controlAttrs(f)"
          rows="5"
          @blur="touch(f.name)"
          @input="onInput(f.name)"
        />
        <input
          v-else
          :ref="(el) => (inputs[f.name] = el)"
          v-model="form[f.name]"
          v-bind="controlAttrs(f)"
          type="text"
          @blur="touch(f.name)"
          @input="onInput(f.name)"
        />
        <div class="field__meta">
          <span v-if="errors[f.name]" :id="`cf-${f.name}-error`" class="field__error">
            {{ t(`contact.validation.${errors[f.name]}`) }}
          </span>
          <span v-if="f.multiline" :id="`cf-${f.name}-count`" class="field__count" aria-live="off">
            {{ form[f.name].length }} / {{ CONTACT_LIMITS[f.name].max }}
          </span>
        </div>
      </div>

      <!-- Honeypot: hidden from people, irresistible to bots. -->
      <div class="form__trap" aria-hidden="true">
        <label for="cf-website">{{ t('contact.form.honeypot') }}</label>
        <input id="cf-website" v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" />
      </div>
    </div>

    <div class="form__foot">
      <button type="submit" class="btn btn--tinted glass press" :disabled="status === 'sending'">
        <span v-if="status === 'sending'" class="form__spinner" aria-hidden="true" />
        {{ status === 'sending' ? t('contact.form.sending') : t('contact.form.send') }}
      </button>
      <div class="form__status" role="status" aria-live="polite">
        <p v-if="status === 'success'" class="form__msg form__msg--ok">{{ t('contact.form.success') }}</p>
        <p v-else-if="status === 'error'" class="form__msg form__msg--err">
          {{ errorText }}
          <a :href="mailto">{{ t('contact.form.fallback') }} →</a>
        </p>
      </div>
    </div>
  </form>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { portfolioData } from '@/data/portfolio'
import { CONTACT_LIMITS, normalizeContact, validateContact } from '@/lib/contactValidation'

const FIELDS = [
  { name: 'name', autocomplete: 'name' },
  { name: 'company', autocomplete: 'organization', optional: true },
  { name: 'contact', autocomplete: 'email', inputmode: 'email' },
  { name: 'message', multiline: true }
]

const { t, locale } = useI18n()
const form = reactive({ name: '', company: '', contact: '', message: '', website: '' })
const errors = reactive({})
const touched = reactive({})
const inputs = {}
const status = ref('idle')
const errorKind = ref('server')

const mailto = computed(() => `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent('azizjoon.uz')}`)
const errorText = computed(() => ({
  rate_limit: t('contact.form.error_rate'),
  validation: t('contact.form.error_validation')
})[errorKind.value] || t('contact.form.error'))

function payload() {
  return normalizeContact({ ...form, lang: locale.value })
}

function validateField(name) {
  const code = validateContact(payload())[name]
  if (code) errors[name] = code
  else delete errors[name]
}

function controlAttrs(f) {
  const describedBy = [errors[f.name] && `cf-${f.name}-error`, f.multiline && `cf-${f.name}-count`].filter(Boolean)
  return {
    id: `cf-${f.name}`,
    name: f.name,
    class: 'field__control glass',
    autocomplete: f.autocomplete,
    inputmode: f.inputmode,
    maxlength: CONTACT_LIMITS[f.name].max,
    placeholder: t(`contact.form.${f.name}_ph`),
    required: !f.optional,
    'aria-invalid': errors[f.name] ? 'true' : 'false',
    'aria-describedby': describedBy.join(' ') || undefined
  }
}

function touch(name) {
  touched[name] = true
  validateField(name)
}

function onInput(name) {
  if (status.value === 'success' || status.value === 'error') status.value = 'idle'
  if (touched[name]) validateField(name)
}

async function submit() {
  if (status.value === 'sending') return

  const data = payload()
  const found = validateContact(data)
  for (const f of FIELDS) {
    touched[f.name] = true
    if (found[f.name]) errors[f.name] = found[f.name]
    else delete errors[f.name]
  }
  const firstInvalid = FIELDS.find((f) => found[f.name])
  if (firstInvalid) {
    inputs[firstInvalid.name]?.focus()
    return
  }

  status.value = 'sending'
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const json = await res.json().catch(() => ({}))
    if (res.ok && json.ok) {
      status.value = 'success'
      Object.assign(form, { name: '', company: '', contact: '', message: '', website: '' })
      for (const f of FIELDS) delete touched[f.name]
      return
    }
    errorKind.value = json.error || 'server'
  } catch {
    errorKind.value = 'server'
  }
  status.value = 'error'
}
</script>

<style scoped lang="scss">
.form {
  grid-column: 1 / -1;
  padding-top: 36px;
  border-top: 1px solid var(--g-edge);
}

.form__head {
  margin-bottom: 20px;
}

.form__title {
  margin: 0;
  font-weight: 800;
  font-stretch: 112.5%;
  font-size: 26px;
  letter-spacing: -.02em;
  line-height: 1.1;
}

.form__hint {
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 15px;
}

.form__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px 18px;
}

.field--contact,
.field--message {
  grid-column: 1 / -1;
}

.field__label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}

.field__optional {
  color: var(--muted);
  font-weight: 500;
}

.field__control {
  display: block;
  width: 100%;
  border: 0;
  border-radius: 18px;
  padding: 14px 18px;
  font: inherit;
  font-size: 15px;
  color: var(--ink);
  resize: vertical;

  &::placeholder {
    color: var(--muted);
    opacity: .75;
  }

  &:focus-visible {
    outline: 2px solid var(--accent-deep);
    outline-offset: 2px;
  }
}

textarea.field__control {
  min-height: 140px;
  border-radius: 22px;
}

.field--error .field__control {
  box-shadow:
    inset 0 1px 0 var(--g-hi),
    inset 0 0 0 1.5px var(--danger),
    0 12px 32px var(--g-shadow);
}

.field__meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  min-height: 24px;
  padding: 4px 6px 0;
  font-size: 13px;
}

.field__error {
  color: var(--danger);
  font-weight: 600;
}

.field__count {
  margin-left: auto;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
}

.form__trap {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.form__foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 10px;
}

.form__status {
  flex: 1 1 260px;
}

.form__msg {
  margin: 0;
  font-weight: 600;
  font-size: 15px;

  &--ok {
    color: var(--ok-text);
  }

  &--err {
    color: var(--danger);

    a {
      color: var(--accent-text);
      margin-left: 4px;
      white-space: nowrap;
    }
  }
}

.form__spinner {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid currentColor;
  border-right-color: transparent;
  animation: form-spin .7s linear infinite;
}

@keyframes form-spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 560px) {
  .form__grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .form__spinner {
    animation-duration: 2s;
  }
}
</style>
