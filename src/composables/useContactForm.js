import { reactive, ref } from 'vue'
import { portfolioData } from '@/data/portfolio'

export function useContactForm() {
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

  function submit() {
    if (!validate()) return false

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

    return true
  }

  return { form, errors, isSubmitted, validateField, submit }
}
