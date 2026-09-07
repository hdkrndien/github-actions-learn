<script setup lang="ts">
defineOptions({
  name: "Button",
});
</script>

<template>
  <button
    type="button"
    class="bg-blue-300 text-red-500"
  >
    <slot>这是一个按钮</slot>
  </button>
</template>
<style scoped></style>