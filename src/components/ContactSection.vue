<template>
  <section id="contact" class="wrap contact-wrap" aria-labelledby="contact-title">
    <div class="contact-glow" aria-hidden="true" />
    <div class="contact glass glass--regular">
      <img class="contact__mini" :src="photo" :alt="t('contact.photo_alt')" width="96" height="96" loading="lazy" decoding="async" />
      <div>
        <h2 id="contact-title" class="section-title">{{ t('contact.title') }}</h2>
        <p class="contact__text">{{ t('contact.text') }}</p>
      </div>
      <div>
        <!-- The only allowed line break is right before the "@". -->
        <a class="contact__mail" :href="`mailto:${personal.email}`"><span>{{ emailUser }}</span><wbr /><span>{{ emailDomain }}</span></a>
        <div class="contact__copy-row">
          <button type="button" class="btn btn--tinted glass press" @click="copyEmail">{{ t('contact.copy') }}</button>
          <span class="contact__copied" :class="{ 'contact__copied--on': flash.on }" role="status" aria-live="polite">{{ flash.text }}</span>
        </div>
        <ul class="contact__social" :aria-label="t('contact.social')">
          <li v-for="s in social" :key="s.label">
            <a class="glass press" :href="s.href" target="_blank" rel="noopener">
              {{ s.label }}<span class="sr-only"> {{ t('a11y.new_tab') }}</span>
            </a>
          </li>
        </ul>
      </div>
      <ContactForm />
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import photo from '@/assets/images/profile.jpg'
import { portfolioData } from '@/data/portfolio'
import ContactForm from './ContactForm.vue'

const { t } = useI18n()
const personal = portfolioData.personal
// "azizjon.malikovv" + "@gmail.com", so a narrow column wraps only at the "@".
const at = personal.email.indexOf('@')
const emailUser = personal.email.slice(0, at)
const emailDomain = personal.email.slice(at)
const social = [
  { label: 'Telegram', href: personal.social.telegram },
  { label: 'GitHub', href: personal.social.github },
  { label: 'LinkedIn', href: personal.social.linkedin }
]

const flash = reactive({ text: '', on: false })
let flashTimer

function showFlash(text) {
  flash.text = text
  flash.on = true
  clearTimeout(flashTimer)
  flashTimer = setTimeout(() => { flash.on = false }, 2200)
}

function legacyCopy(text) {
  const ta = document.createElement('textarea')
  ta.value = text
  ta.setAttribute('readonly', '')
  ta.style.position = 'fixed'
  ta.style.opacity = '0'
  document.body.appendChild(ta)
  ta.select()
  let ok = false
  try { ok = document.execCommand('copy') } catch { /* unsupported */ }
  ta.remove()
  return ok
}

async function copyEmail() {
  const text = personal.email
  let ok = false
  try {
    await navigator.clipboard.writeText(text)
    ok = true
  } catch {
    ok = legacyCopy(text)
  }
  showFlash(ok ? t('contact.copied') : t('contact.copy_failed'))
}

onBeforeUnmount(() => clearTimeout(flashTimer))
</script>

<style scoped lang="scss">
.contact-wrap {
  position: relative;
  margin-top: 120px;
}

.contact-glow {
  position: absolute;
  inset: 10% 8%;
  border-radius: 50%;
  background: var(--blob-d);
  filter: blur(70px);
  opacity: .5;
  z-index: -1;
}

.contact {
  border-radius: 36px;
  padding: clamp(32px, 6vw, 72px);
  display: grid;
  grid-template-columns: auto 1.2fr 1fr;
  gap: 40px;
  align-items: center;
}

.contact__mini {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 0 6px var(--g-clear), 0 0 0 7px var(--g-edge);
}

.contact__text {
  margin: 14px 0 0;
  color: var(--muted);
  font-size: 18px;
  max-width: 42ch;
}

.contact__mail {
  display: block;
  font-weight: 700;
  font-stretch: 112.5%;
  font-size: clamp(18px, 1.7vw, 26px);
  text-decoration: none;

  span {
    white-space: nowrap;
  }
}

.contact__copy-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-top: 16px;
}

.contact__copied {
  color: var(--accent-text);
  font-size: 15px;
  font-weight: 600;
  opacity: 0;
  transition: opacity .25s;

  &--on {
    opacity: 1;
  }
}

.contact__social {
  list-style: none;
  margin: 22px 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  a {
    display: inline-block;
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    padding: 10px 16px;
    border-radius: 999px;
  }
}

@media (max-width: 960px) {
  .contact {
    grid-template-columns: 1fr;
  }
}
</style>
