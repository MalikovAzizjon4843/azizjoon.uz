<template>
  <footer class="original-footer">
    <div class="container original-footer__inner">
      <SocialLinks />
      <p>{{ $t('footer.built_by') }} &copy; {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>

<script setup>
import SocialLinks from '@/components/shared/SocialLinks.vue'
</script>

<style lang="scss" scoped>
.original-footer {
  border-top: 1px solid var(--border);
  padding: 32px 0;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  p {
    font-size: 13px;
    color: var(--text-3);
  }
}
</style>
