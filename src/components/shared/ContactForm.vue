<template>
  <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
    <div v-if="isSubmitted" class="form-success">
      {{ $t('contact.form_success') }}
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
      <button type="submit" class="form-submit">
        {{ $t('contact.form_send') }}
      </button>
    </template>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { portfolioData } from '@/data/portfolio'

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
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateField(field) {
  errors[field] = ''
  if (field === 'name' && form.name.length < 2) {
    errors.name = 'Min 2 characters'
  }
  if (field === 'email' && !emailRegex.test(form.email)) {
    errors.email = 'Invalid email'
  }
  if (field === 'message' && form.message.length < 10) {
    errors.message = 'Min 10 characters'
  }
  return !errors[field]
}

function validate() {
  return validateField('name') & validateField('email') & validateField('message')
}

function handleSubmit() {
  if (!validate()) return

  const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
  const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
  window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`

  isSubmitted.value = true
  setTimeout(() => {
    isSubmitted.value = false
    form.name = ''
    form.email = ''
    form.message = ''
  }, 3000)
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

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
}

.form-success {
  padding: 16px;
  background-color: rgba(74, 222, 128, 0.1);
  border: 1px solid var(--success);
  border-radius: 8px;
  color: var(--success);
  font-size: 14px;
  text-align: center;
}
</style>
