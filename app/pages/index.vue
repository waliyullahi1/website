<template>
  <UiTypographyH1 color="secondary" class="text-center mt-28 mb-1">United States</UiTypographyH1>
  <header class="text-center mt-0 pb-10 pt-1" :style="headerStyle">
    <Container :addTopBottomPadding="false">
      <UiTypographyH1 color="white">Trademark Registration</UiTypographyH1>
      <UiTypographyP color="white" class="max-w-2xl mx-auto">Secure your name, logo, or slogan with fast, affordable trademark registration backed by expert legal guidance.</UiTypographyP>

      <div class="grid gap-2 my-8">
        <UiTypographyP color="white"  class="flex items-center justify-center gap-4">
          <UiIconsCheck  class="text-secondary w-6"/>
          Maximise your chances for successful TM registration
        </UiTypographyP>
        <UiTypographyP color="white"  class="flex items-center justify-center gap-4">
          <UiIconsCheck  class="text-secondary w-6"/>
          Flat-fee pricing with no hidden costs
        </UiTypographyP>
        <UiTypographyP color="white"  class="flex items-center justify-center gap-4">
          <UiIconsCheck  class="text-secondary w-6"/>
          Experienced legal team in your corner, just 1-click away
        </UiTypographyP>
      </div>

      <UiIconsArrow class="w-20 text-secondary mx-auto mt-32 animate-bounce" />
    </Container>
  </header>
</template>

<script setup>
const config = useRuntimeConfig()
const projectName = config.public.projectName
</script>

<style>
header {
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/law.jpg');
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>