<template>
  <footer class="minimal-footer">
    <SocialLinks class="footer-social" />
    <p class="mono">{{ $t('footer.built_by') }}</p>
  </footer>
</template>

<script setup>
import SocialLinks from '@/components/shared/SocialLinks.vue'
</script>

<style lang="scss" scoped>
.minimal-footer {
  text-align: center;
  margin: 80px 0 24px;

  @media (max-width: 767px) {
    margin: 60px 0 24px;
  }

  .footer-social {
    justify-content: center;
    margin-bottom: 16px;

    @media (min-width: 1025px) {
      display: none;
    }
  }

  p {
    font-size: 12px;
    color: var(--text-3);
    letter-spacing: 0.5px;
    transition: color 0.2s;

    &:hover {
      color: var(--accent);
    }
  }
}
</style>
