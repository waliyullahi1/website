<template>
  <button @click="$emit('logoClicked')" class="flex items-center font-bold gap-3 text-2xl text-secondary marcellus">
    {{ projectName }}
  </button>
</template>

<script setup>
const config = useRuntimeConfig()
const projectName = config.public.projectName
</script>