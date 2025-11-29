<template>
  <div>
    <Trademarkform ref="trademarkformFunctions" />
    <nav class="fixed z-90 w-full top-0 left-0 border-b border-accent-200 bg-white">
      <Container :addTopBottomPadding="false" class="flex items-center justify-between py-4">

        <!-- Logo -->
        <NavigationLogo @logoClicked="handleLogoClick" />

        <!-- Desktop Navigation -->
         
        <div class="hidden md:flex gap-8  flex-shrink-0">
          <UiButtonsTertiary  @clicked="scrollToSection('pricing')">Pricing</UiButtonsTertiary>
          <UiButtonsTertiary  @clicked="scrollToSection('faqs')">FAQs</UiButtonsTertiary>
         
        </div>
        <div class=" hidden md:flex gap-8  flex-shrink-0">  
          <UiButtonsPrimary @click="openform">Register my Trademark</UiButtonsPrimary>
        </div>
         

        <!-- Mobile Menu Toggle -->
        <NavigationToggle @revealMenu="toggleMenu" />

        <!-- Mobile Menu (rendered conditionally) -->
        <div v-if="menuRevealed"
          class="flex flex-col items-start gap-12 md:hidden absolute bg-white h-screen top-[4.6rem] left-0 px-6 py-10 w-full">
          <UiButtonsTertiary  @clicked="scrollToSection('pricing')">Pricing</UiButtonsTertiary>
          <UiButtonsTertiary  @clicked="scrollToSection('faqs')">FAQs</UiButtonsTertiary>
          <UiButtonsPrimary @click="openform">Register my Trademark</UiButtonsPrimary>
        </div>
      </Container>
    </nav>
  </div>

</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
const trademarkformFunctions = ref(null)

// Props with validation - only UI-related props remain
const props = defineProps({
});

// Emits
const emit = defineEmits([
  'switchMode',
]);

// Router
const router = useRouter()

// Reactive state
const menuRevealed = ref(false)
// Methods
function toggleMenu() {
  menuRevealed.value = !menuRevealed.value
}

const openform = () => {
  trademarkformFunctions.value.openForm()
}

const scrollToSection = async (sectionId) => {
  // If not on home page, navigate to home first
  if (router.currentRoute.value.path !== '/') {
    await router.push('/')
    // Wait for page to load, then scroll
    await new Promise(resolve => setTimeout(resolve, 500))
  }
  
  // Scroll to section
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  
  menuRevealed.value = false // Close mobile menu after clicking
}

function handleLogoClick() {
  emit('navigate', { path: '/', type: 'logo' })
  try {
    router.push('/')
  } catch (error) {
    console.error('Navigation error:', error)
  }
}
</script>
