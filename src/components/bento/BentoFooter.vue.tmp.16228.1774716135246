<template>
  <footer class="bento-footer">
    <div class="container bento-footer__inner">
      <SocialLinks />
      <p class="mono">
        {{ $t('footer.built_by') }} &copy; {{ new Date().getFullYear() }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import SocialLinks from '@/components/shared/SocialLinks.vue'
</script>

<style lang="scss" scoped>
.bento-footer {
  padding: 16px 0;
  text-align: center;

  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    flex-direction: column;
  }

  :deep(.social-links) {
    gap: 12px;

    .social-link {
      svg {
        width: 16px;
        height: 16px;
      }
      color: var(--text-dim);
      &:hover { color: var(--accent); }
    }
  }

  p {
    font-size: 10px;
    color: var(--text-dim);
  }
}
</style>
