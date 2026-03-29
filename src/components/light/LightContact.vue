<template>
  <section id="contact" class="light-contact">
    <div class="container-light">
      <div class="contact-wrapper">
        <span class="section-label">{{ $t('contact.title').toUpperCase() }}</span>
        <h2>{{ $t('contact.title') }}</h2>
        <p class="contact-desc">{{ $t('contact.subtitle') }}</p>

        <div class="contact-form-wrap">
          <ContactForm />
        </div>

        <p class="contact-or mono">{{ $t('contact.or') }}</p>

        <a :href="`mailto:${portfolioData.personal.email}`" class="contact-email">
          {{ portfolioData.personal.email }}
        </a>

        <a :href="portfolioData.personal.resumePath" download class="resume-link">
          {{ $t('resume.download') }}
        </a>

        <SocialLinks class="contact-social" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
import ContactForm from '@/components/shared/ContactForm.vue'
import SocialLinks from '@/components/shared/SocialLinks.vue'
</script>

<style lang="scss" scoped>
.light-contact {
  padding: 80px 0;
}

.container-light {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.contact-wrapper {
  background: var(--gradient-tint, var(--bg-secondary));
  border-radius: 20px;
  padding: 64px 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    padding: 40px 20px;
  }
}

.section-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 2px;
}

h2 {
  font-family: var(--font-heading);
  font-size: 32px;
  font-weight: 600;
  margin: 8px 0 16px;

  @media (max-width: 767px) {
    font-size: 24px;
  }
}

.contact-desc {
  font-size: 16px;
  color: var(--text-2);
  max-width: 500px;
  margin-bottom: 32px;
}

.contact-form-wrap {
  width: 100%;
  max-width: 500px;
}

.contact-or {
  font-size: 13px;
  color: var(--text-3);
  margin: 24px 0 12px;
}

.contact-email {
  font-size: 16px;
  font-weight: 500;
  color: var(--accent);
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
}

.resume-link {
  display: inline-block;
  margin-top: 16px;
  font-size: 13px;
  color: var(--accent);
  transition: opacity 0.2s;

  &:hover { opacity: 0.8; }
}

.contact-social {
  margin-top: 20px;
  justify-content: center;
}
</style>
