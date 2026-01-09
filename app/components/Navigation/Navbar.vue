<template>
  <div>
    <nav
      :class="[
        'fixed z-90 w-full top-0 left-0 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-white text-black border-accent-200 shadow-md'
          : 'bg-transparent text-white border-transparent'
      ]"
    >
      <Container :addTopBottomPadding="false" class="flex items-center justify-between py-4">

        <!-- Logo -->
        <NavigationLogo @logoClicked="handleLogoClick" />

        <!-- Desktop Navigation -->
        <div class="hidden md:flex gap-8 flex-shrink-0">
          <NuxtLink to="/" activeClass="active-link">
            <p class="font-semibold text-lg cursor-pointer">Home</p>
          </NuxtLink>

          <NuxtLink to="/about-us" activeClass="active-link">
            <p class="font-semibold text-lg cursor-pointer">About us</p>
          </NuxtLink>

          <NuxtLink to="/contact-us" activeClass="active-link">
            <p class="font-semibold text-lg cursor-pointer">Contact us</p>
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:flex gap-8 flex-shrink-0">
          <UiButtonsPrimary @click="openform">
            Register my Trademark
          </UiButtonsPrimary>
        </div>

        <!-- Mobile Toggle -->
        <NavigationToggle @revealMenu="toggleMenu" />

        <!-- Mobile Menu -->
        <div
          v-if="menuRevealed"
          class="flex flex-col items-start gap-12 md:hidden absolute bg-white h-screen top-[4.6rem] left-0 px-6 py-10 w-full"
        >
          <UiButtonsTertiary @clicked="scrollToSection('pricing')">
            Pricing
          </UiButtonsTertiary>

          <UiButtonsTertiary @clicked="scrollToSection('faqs')">
            FAQs
          </UiButtonsTertiary>

          <UiButtonsPrimary @click="openform">
            Register my Trademark
          </UiButtonsPrimary>
        </div>

      </Container>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// States
const menuRevealed = ref(false)
const isScrolled = ref(false)

// Toggle mobile menu
function toggleMenu() {
  menuRevealed.value = !menuRevealed.value
}

// Open form page
const openform = () => {
  router.push('/forms')
}

// Scroll to section
const scrollToSection = async (sectionId) => {
  if (router.currentRoute.value.path !== '/') {
    await router.push('/')
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }

  menuRevealed.value = false
}

// Logo click
function handleLogoClick() {
  router.push('/')
}

// Detect scroll (14px)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// Add & remove scroll listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.active-link p {
  color: #b78d46;
  border-bottom: 2px solid #b78d46;
  padding-bottom: 3px;
  font-weight: 600;
}
</style>
