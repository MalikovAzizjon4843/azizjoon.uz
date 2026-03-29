<template>
  <section id="contact" class="original-contact">
    <div class="container">
      <h2 class="section-heading">
        <span class="text-accent">//</span> {{ $t('contact.title') }}
      </h2>

      <div class="contact-grid">
        <div class="contact-info">
          <p class="contact-subtitle">{{ $t('contact.subtitle') }}</p>

          <a :href="`mailto:${portfolioData.personal.email}`" class="contact-email">
            {{ portfolioData.personal.email }}
          </a>

          <SocialLinks class="contact-social" />

          <a
            :href="portfolioData.personal.resumePath"
            download
            class="btn btn-outline"
          >
            {{ $t('resume.download') }}
          </a>
        </div>

        <div class="contact-form-wrap">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
import SocialLinks from '@/components/shared/SocialLinks.vue'
import ContactForm from '@/components/shared/ContactForm.vue'
</script>

<style lang="scss" scoped>
.original-contact {
  padding: 100px 0;
}

.section-heading {
  font-size: 28px;
  margin-bottom: 48px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-subtitle {
  font-size: 16px;
  line-height: 1.7;
  max-width: 400px;
}

.contact-email {
  font-size: 20px;
  font-weight: 600;
  color: var(--accent);
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
}

.contact-social {
  margin-top: 8px;
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-2);
  transition: all 0.2s ease;
  align-self: flex-start;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
}

.contact-form-wrap {
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px;
}
</style>
