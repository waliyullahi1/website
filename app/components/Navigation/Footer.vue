<template>
  <footer class="border-t border-accent-200 w-full">

    <Container :addTopBottomPadding="false" class="border-t border-accent-200 py-6 sm:flex block items-center justify-between">
    <div class="sm:flex block  items-center gap-4 ">
       <NavigationLogo class="" />
      <UiTypographyP><span class=" sm:text-base font-medium text-sm">&copy;{{ new Date().getFullYear() }} {{ projectName }}. All rights reserved.</span></UiTypographyP>

    </div>
         </Container>
  </footer>
</template>

<script setup>
// Get the public runtime config so project name can be used across components
const config = useRuntimeConfig()
const projectName = config.public.projectName
</script>