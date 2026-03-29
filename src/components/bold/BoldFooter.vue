<template>
  <footer class="bold-footer">
    <div class="container bold-footer__inner">
      <SocialLinks />
      <p class="mono">
        <span class="text-accent">&gt;</span> {{ $t('footer.built_by') }} &copy; {{ new Date().getFullYear() }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import SocialLinks from '@/components/shared/SocialLinks.vue'
</script>

<style lang="scss" scoped>
.bold-footer {
  border-top: 2px solid var(--accent);
  padding: 24px 0;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  p {
    font-size: 12px;
    color: var(--text-3);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}
</style>
