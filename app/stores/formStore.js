import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('form', () => {
  const form = ref({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  })
  return { form }
})
