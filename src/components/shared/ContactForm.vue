<template>
  <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
    <div v-if="isSubmitted" class="form-success">
      ✓ {{ $t('contact.success') }}
    </div>
    <template v-else>
      <div class="form-group" :class="{ error: errors.name }">
        <input
          v-model="form.name"
          type="text"
          :placeholder="$t('contact.form_name')"
          aria-label="Name"
          @blur="validateField('name')"
        />
        <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
      </div>
      <div class="form-group" :class="{ error: errors.email }">
        <input
          v-model="form.email"
          type="email"
          :placeholder="$t('contact.form_email')"
          aria-label="Email"
          @blur="validateField('email')"
        />
        <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
      </div>
      <div class="form-group" :class="{ error: errors.message }">
        <textarea
          v-model="form.message"
          rows="4"
          :placeholder="$t('contact.form_message')"
          aria-label="Message"
          @blur="validateField('message')"
        ></textarea>
        <span v-if="errors.message" class="error-msg">{{ errors.message }}</span>
      </div>
      <button type="submit" class="form-submit" :disabled="isSubmitting">
        <span v-if="isSubmitting" class="submit-loading">
          <span class="spinner"></span>
          {{ $t('contact.sending') }}
        </span>
        <span v-else>{{ $t('contact.form_send') }}</span>
      </button>
    </template>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { portfolioData } from '@/data/portfolio'

const { t } = useI18n()

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitted = ref(false)
const isSubmitting = ref(false)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateField(field) {
  errors[field] = ''
  if (field === 'name' && form.name.length < 2) {
    errors.name = t('contact.validation.name_min')
  }
  if (field === 'email' && !emailRegex.test(form.email)) {
    errors.email = t('contact.validation.email_invalid')
  }
  if (field === 'message' && form.message.length < 10) {
    errors.message = t('contact.validation.message_min')
  }
  return !errors[field]
}

function validate() {
  return validateField('name') & validateField('email') & validateField('message')
}

function openMailtoFallback() {
  const subject = encodeURIComponent(`azizjoon.uz dan murojaat - ${form.name}`)
  const body = encodeURIComponent(`${form.message}\n\nEmail: ${form.email}`)
  window.open(`mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`)
}

async function handleSubmit() {
  if (!validate()) return

  const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    openMailtoFallback()
    return
  }

  const text =
    `📬 Yangi murojaat!\n\n` +
    `👤 Ism: ${form.name}\n` +
    `📧 Email: ${form.email}\n` +
    `💬 Xabar:\n${form.message}\n\n` +
    `🌐 Sayt: azizjoon.uz\n` +
    `🕐 Vaqt: ${new Date().toLocaleString('uz-UZ')}`

  try {
    isSubmitting.value = true

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text
        })
      }
    )

    if (response.ok) {
      isSubmitted.value = true
      form.name = ''
      form.email = ''
      form.message = ''
      setTimeout(() => { isSubmitted.value = false }, 5000)
    } else {
      throw new Error('Telegram API error')
    }
  } catch {
    openMailtoFallback()
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.form-group {
  position: relative;

  input, textarea {
    width: 100%;
    padding: 12px 14px;
    background-color: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text);
    font-size: 14px;
    transition: border-color 0.2s ease;

    &::placeholder {
      color: var(--text-3);
    }

    &:focus {
      border-color: var(--accent);
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  &.error {
    input, textarea {
      border-color: #ef4444;
    }
  }
}

.error-msg {
  display: block;
  font-size: 12px;
  color: #ef4444;
  margin-top: 4px;
  padding-left: 4px;
}

.form-submit {
  padding: 12px 24px;
  background-color: var(--accent);
  color: var(--bg);
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  transition: opacity 0.2s ease, transform 0.2s ease;
  align-self: flex-start;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}

.submit-loading {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.spinner {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.form-success {
  padding: 16px;
  background-color: rgba(74, 222, 128, 0.1);
  border: 1px solid var(--success, #4ade80);
  border-radius: 8px;
  color: var(--success, #4ade80);
  font-size: 14px;
  text-align: center;
}
</style>
