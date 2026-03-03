<script lang="ts" setup></script>
<template>
  <button class="button-icon-big">
    <slot />
  </button>
</template>
<style scoped>
.button-icon-big {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  border: 3px solid var(--color-bg);
}

.button-icon-big:hover {
  background: var(--color-bg-hover);
}
</style>
