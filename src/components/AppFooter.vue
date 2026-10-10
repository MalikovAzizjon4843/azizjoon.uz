<template>
  <footer class="wrap footer">
    <span>{{ t('footer.text', { year }) }}</span>
    <span>azizjoon.uz</span>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 48px 0 140px;
  color: var(--muted);
  font-size: 14px;
}

@media (max-width: 960px) {
  .footer {
    flex-direction: column;
  }
}
</style>
