<template>
  <section id="hero" class="original-hero">
    <div class="container">
      <div class="hero-content">
        <p class="hero-greeting animate-fade-in-up">{{ $t('hero.greeting') }}</p>
        <h1 class="hero-name animate-fade-in-up delay-2">
          {{ portfolioData.personal.name }}
          <span class="text-accent">{{ portfolioData.personal.surname }}</span>
        </h1>
        <h2 class="hero-title animate-fade-in-up delay-4">{{ $t('hero.title') }}</h2>
        <p class="hero-bio animate-fade-in-up delay-6">{{ $t('hero.bio') }}</p>

        <div class="hero-actions animate-fade-in-up delay-8">
          <a href="#projects" class="btn btn-primary">{{ $t('hero.cta_projects') }}</a>
          <a href="#contact" class="btn btn-outline">{{ $t('hero.cta_contact') }}</a>
        </div>

        <SocialLinks class="hero-social animate-fade-in-up delay-10" />
      </div>

      <div class="hero-photo animate-fade-in delay-4">
        <ProfilePhoto :size="280" border-radius="16px" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
import SocialLinks from '@/components/shared/SocialLinks.vue'
import ProfilePhoto from '@/components/shared/ProfilePhoto.vue'
</script>

<style lang="scss" scoped>
.original-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 64px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;

    @media (max-width: 767px) {
      flex-direction: column-reverse;
      text-align: center;
      gap: 40px;
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-greeting {
  font-size: 16px;
  color: var(--accent);
  margin-bottom: 12px;
}

.hero-name {
  font-size: clamp(2.5rem, 6vw, 4rem);
  line-height: 1.1;
  margin-bottom: 8px;
}

.hero-title {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--text-2);
  font-weight: 400;
  margin-bottom: 20px;
}

.hero-bio {
  font-size: 16px;
  max-width: 480px;

  @media (max-width: 767px) {
    margin: 0 auto;
  }
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 28px;

  @media (max-width: 767px) {
    justify-content: center;
  }
}

.hero-social {
  margin-top: 32px;

  @media (max-width: 767px) {
    justify-content: center;
  }
}

.hero-photo {
  flex-shrink: 0;

  @media (max-width: 767px) {
    :deep(.profile-photo) {
      width: 180px !important;
      height: 180px !important;
    }
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;

  &-primary {
    background-color: var(--accent);
    color: var(--bg);

    &:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }
  }

  &-outline {
    border: 1px solid var(--border);
    color: var(--text-2);

    &:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
  }
}
</style>
