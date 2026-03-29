<template>
  <div class="bento-photo-card">
    <ProfilePhoto :size="100" border-radius="8px" />
  </div>
</template>

<script setup>
import ProfilePhoto from '@/components/shared/ProfilePhoto.vue'
</script>

<style lang="scss" scoped>
.bento-photo-card {
  grid-column: 6 / 9;
  grid-row: 1 / 2;
  background-color: var(--accent);
  border: 1px solid var(--accent);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  transition: transform 0.25s;

  &:hover {
    transform: translateY(-2px);
  }

  :deep(.profile-photo) {
    border-color: var(--bg) !important;
    border-width: 3px !important;
  }

  @media (max-width: 767px) {
    grid-column: 1 / -1;
    grid-row: auto;
    height: 160px;
  }
}
</style>
