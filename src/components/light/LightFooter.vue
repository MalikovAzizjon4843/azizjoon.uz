<template>
  <footer class="light-footer">
    <div class="container-light light-footer__inner">
      <SocialLinks />
      <p>{{ $t('footer.built_by') }} &copy; {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>

<script setup>
import SocialLinks from '@/components/shared/SocialLinks.vue'
</script>

<style lang="scss" scoped>
.light-footer {
  border-top: 0.5px solid var(--border);
  padding: 24px 0;

  &__inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  p {
    font-size: 14px;
    color: var(--text-3);
  }
}

.container-light {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}
</style>
