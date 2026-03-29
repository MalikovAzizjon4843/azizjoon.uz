<template>
  <section id="contact" class="minimal-contact minimal-section">
    <p class="contact-label mono text-accent">04. {{ $t('contact.title') }}</p>
    <h2>{{ $t('contact.title') }}</h2>
    <p class="contact-desc">{{ $t('contact.subtitle') }}</p>

    <ContactForm />

    <p class="contact-or mono">{{ $t('contact.or') }}</p>

    <a :href="`mailto:${portfolioData.personal.email}`" class="contact-cta mono">
      {{ portfolioData.personal.email }}
    </a>

    <a :href="portfolioData.personal.resumePath" download class="resume-link mono">
      {{ $t('resume.download') }}
    </a>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
import ContactForm from '@/components/shared/ContactForm.vue'
</script>

<style lang="scss" scoped>
.minimal-contact {
  padding: 100px 0;
  text-align: center;
  max-width: 600px;

  h2 {
    font-family: var(--font-heading);
    font-size: 44px;
    font-weight: 600;
    margin: 12px 0 20px;

    @media (max-width: 767px) {
      font-size: 28px;
    }
  }
}

.contact-label {
  font-size: 14px;
}

.contact-desc {
  font-size: 16px;
  color: var(--text-2);
  margin-bottom: 32px;
}

.contact-or {
  font-size: 13px;
  color: var(--text-3);
  margin: 24px 0 16px;
}

.contact-cta {
  display: inline-block;
  padding: 16px 48px;
  border: 1px solid var(--accent);
  border-radius: 4px;
  color: var(--accent);
  font-size: 14px;
  transition: background-color 0.25s;

  &:hover {
    background-color: var(--accent-tint);
  }
}

.resume-link {
  display: block;
  margin-top: 20px;
  font-size: 12px;
  color: var(--accent);
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
}
</style>
