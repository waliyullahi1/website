<template>
  <button @click="$emit('logoClicked')" class="flex items-center gap-3 text-4xl text-secondary marcellus">
    {{ projectName }}
  </button>
</template>

<script setup>
const config = useRuntimeConfig()
const projectName = config.public.projectName
</script>