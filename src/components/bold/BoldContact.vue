<template>
  <section id="contact" class="bold-contact">
    <div class="container">
      <h2 class="section-heading mono">
        <span class="text-accent">#</span> {{ $t('contact.title').toUpperCase() }}
      </h2>

      <div class="contact-grid">
        <div class="contact-terminal">
          <div class="term-line mono">
            <span class="text-accent">$</span> echo $CONTACT_INFO
          </div>
          <div class="term-output">
            <p class="mono"><span class="text-accent">email:</span> {{ portfolioData.personal.email }}</p>
            <p class="mono"><span class="text-accent">location:</span> {{ portfolioData.personal.location }}</p>
            <p class="mono"><span class="text-accent">status:</span> <span class="status-text">{{ $t('hero.available') }}</span></p>
          </div>
          <div class="term-line mono">
            <span class="text-accent">$</span> cat message.txt
          </div>
          <div class="term-output">
            <p>{{ $t('contact.subtitle') }}</p>
          </div>

          <SocialLinks class="contact-social" />

          <a :href="portfolioData.personal.resumePath" download class="resume-btn mono">
            [{{ $t('resume.download').toUpperCase() }}]
          </a>
        </div>

        <div class="contact-form-wrap">
          <div class="form-header mono">
            <span class="text-accent">&gt;</span> new_message.sh
          </div>
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
.bold-contact {
  padding: 80px 0;
  border-top: 1px solid var(--border);
}

.section-heading {
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 40px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.contact-terminal {
  background-color: var(--card);
  border: 2px solid var(--border);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.term-line {
  font-size: 14px;
  color: var(--text);
  display: flex;
  gap: 8px;
}

.term-output {
  padding-left: 20px;
  margin-bottom: 8px;

  p {
    font-size: 14px;
    margin-bottom: 4px;
  }
}

.status-text {
  color: var(--success);
}

.contact-social {
  margin-top: 8px;
}

.resume-btn {
  display: inline-block;
  padding: 12px 24px;
  border: 2px solid var(--accent);
  color: var(--accent);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  align-self: flex-start;
  margin-top: 8px;
  transition: all 0.15s;

  &:hover {
    background-color: var(--accent);
    color: var(--bg);
  }
}

.contact-form-wrap {
  background-color: var(--card);
  border: 2px solid var(--border);
  padding: 28px;
}

.form-header {
  font-size: 14px;
  color: var(--text-2);
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}
</style>
