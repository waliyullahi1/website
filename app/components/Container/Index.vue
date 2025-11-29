<template>
  <div
    class="container  lg:w-[90%] mx-auto px-4 sm:px-6"
    :class="[addTopBottomPadding ? 'py-10 lg:py-20' : '']"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  addTopBottomPadding: {
    type: Boolean,
    default: true,
  },
});
</script>

<style>

</style>