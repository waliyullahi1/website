<template>
  <section v-if="show" class="fixed w-full z-100 h-dvh overflow-y-auto bg-black/70 backdrop-invert backdrop-opacity-10">

    <div class="flex h-full justify-center items-center">

      <div
        :class="showform ? 'translate-y-0' : '-translate-y-[700px]'"
        class="w-[800px] duration-300 ease-in-out rounded-2xl mx-4 flex overflow-hidden bg-white shadow-xl h-fit"
      >

        <!-- Left image -->
        <div class="w-1/2 sm:block hidden bg-[url('assets/images/popup-left-img.png')] bg-cover bg-center"></div>

        <!-- Right content -->
        <div class="md:w-1/2 w-full p-4 overflow-y-auto space-y-5">

          <!-- Close button -->
          <div class="flex justify-end mt-2">
            <button
              @click="closeForm()"
              class="bg-red-600 text-white w-7 h-7 flex justify-center items-center font-bold rounded-full">
              x
            </button>
          </div>

          <UiTypographyH3>
            <span class="font-bold t-3">
              Ready to Protect Your
              <span class="text-accent-600 font-bold">Brand?</span>
            </span>
          </UiTypographyH3>

          <UiTypographyP>
            <span>Secure your brand effortlessly with our expert and reliable
              trademark registration service.</span>
          </UiTypographyP>

          <form class="px-4 pt-2 space-y-6">
            <FormInput label="Full Name" :required="true" v-model:inputValue="form.fullname" type="text" name="fullname" />
            <FormInput label="Email Address" :required="true" v-model:inputValue="form.email" type="email" name="email" />
            <FormInput label="Phone Number" :required="true" v-model:inputValue="form.phone" type="text" name="phone" />
            <FormTextarea label="Message" :required="true" v-model:inputValue="form.message" name="message" />
            <FormButton @click="submit" :loading="isLoading" type="submit">Submit</FormButton>
          </form>

        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useFormStore } from '@/stores/formStore'
const formStore = useFormStore()
const form = formStore.form  
import { useRouter } from 'vue-router'

const router = useRouter()

// Visibility states
const show = ref(false)        // controls if section appears
const showform = ref(false)    // controls slide animation
const isLoading = ref(false)
// Emits
const emit = defineEmits(['closeform', 'openform'])

// OPEN FORM
const openForm = () => {
  show.value = true             // reveal popup
  
  setTimeout(() => {
    showform.value = true       // slide up animation
    emit('openform')
  }, 20)
}

const closeForm = () => {
  showform.value = false        // slide down animation
  emit('closeform')

  setTimeout(() => {
    show.value = false          // fully hide
  }, 200)                       // matches duration-700
}

const submit = (e) => {
  isLoading.value = true

e.preventDefault()
setTimeout(()=>{
  
   router.push('/forms')
 isLoading.value = false

}, 500)


} 
// CLOSE FORM


onMounted(() => {


  console.log("Form reset on page reload")
})

// expose to parent so you can call openForm()
defineExpose({
  openForm,
  closeForm
})
</script>

