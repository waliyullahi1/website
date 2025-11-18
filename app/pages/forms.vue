<template>
  <div>
    <section class="my-10">
      <Container class="flex justify-center items-center">
        <!-- fist form -->
        <div v-if="first_form"  class="lg:w-2/3 md:w-[90%] space-y-4 md:space-x-10">
          <div class="text-center">
            <div class="py-2">
              <UiTypographyH2>
                <span class="font-bold">Step 2</span>
              </UiTypographyH2>
            </div>
            <UiTypographyH3>Trademark Details</UiTypographyH3>
          </div>

          <div class="w-full shadow-xl border">
            <div class="space-y-3">
              <UiTypographyH3 class="text-center">
                <span class="font-bold">Fill out this brief form. It takes less than 60 seconds!</span>
              </UiTypographyH3>

              <div class="bg-gray-100 border-l-4 py-4 px-4 border-l-accent-600">
                <UiTypographyP>
                  <span class="font-bold">Trademark Details</span>
                </UiTypographyP>
              </div>

              <form @submit.prevent="first_submit" class="md:px-4 px-2 md:pt-4 pt-2 space-y-7">

                <!-- Trademark Type -->
                <div>
                  <label>What are you trying to Trademark?</label>
                  <div class="pt-3 flex gap-6">
                    <FormCheckbox v-model="form.name" label="Name" />
                    <FormCheckbox v-model="form.logo" label="Logo" />
                    <FormCheckbox v-model="form.slogan" label="Slogan" />
                  </div>
                </div>

                <!-- Mark Name -->
                <div v-if="form.name">
                    <FormInput  :required="form.name"  v-model:inputValue="form.relname" label="Enter Mark Here" type="text" name="markName" />
                </div>

                <!-- Logo Upload -->
                <div v-if="form.logo" :required="form.logo"  class="flex items-center gap-2 py-3">
                  <label class="font-bold whitespace-nowrap">Logo Mark</label>
                  <FormInput @change="handleLogoUpload" type="file" />
                </div>

                <!-- Slogan -->
                 <div class="" v-if="form.slogan">
                    <FormInput v-model="form.slogan_name" :required="form.slogan"  label="Enter Slogan Here" type="text" name="slogan" />

                 </div>
                
                <!-- Trademark Category -->
                <FormSelect
                  v-model:selectedOption="form.trademarkCategory" :required="true" 
                  label="Please select the entity type that is applying for the trademark:"
                  :options="[
                    { value: 'Individual', text: 'Individual' },
                    { value: 'Corporation', text: 'Corporation' },
                    { value: 'Partnership', text: 'Partnership' },
                    { value: 'Sole Proprietorship', text: 'Sole Proprietorship' },
                    { value: 'Multiple Individuals', text: 'Multiple Individuals' },
                    { value: 'Unincorporated Association', text: 'Unincorporated Association' },
                    { value: 'Charitable Corporation', text: 'Charitable Corporation' },
                    { value: 'Charitable Non-Profit Corporation', text: 'Charitable Non-Profit Corporation' },
                    { value: 'Foundation', text: 'Foundation' },
                    { value: 'Non-Profit Corporation', text: 'Non-Profit Corporation' },
                    { value: 'Non-Profit Organization', text: 'Non-Profit Organization' },
                    { value: 'Other Business', text: 'Other Business Type' }
                  ]"
                />

                <!-- Business Details -->
                <FormInput v-model:inputValue="form.business_name" :required="true"  label="Business Name:" type="text" name="businessName" />
                <FormInput v-model:inputValue="form.business_industry" :required="true" label="Business Industry:" type="text" name="businessIndustry" />
                <FormTextarea v-model:inputValue="form.business_description"  :required="true" label="Business Description:" name="businessDescription" />

                <!-- Submit Button -->
                <UiButtonsPrimary type="submit" ><span>CONTINUE</span></UiButtonsPrimary>
              </form>

            </div>
          </div>
        </div>

        <!-- second form -->
         <div v-if="second_form" class="lg:w-2/3 md:w-[90%] w-full space-y-4 md:space-x-10">
          <div class=" pb-10">
            <div class="py-2">
              <UiTypographyH2>
                Secure Payment Globally!
              </UiTypographyH2>
            </div>
           
          </div>

          <div class="w-full shadow-xl py-4 border ">
            <div class="">
              <UiTypographyH3 class="text-center">
                <span class="font-bold">Total Payable $45</span>
              </UiTypographyH3>

              <div class=" bg-accent-200 border-l-4 py-4 px-4 border-l-accent-600">
               <UiTypographyH3 class=" font-bold">Pay with your credit card </UiTypographyH3>
              </div>

              <form @submit.prevent="submitForm" class="md:px-4 px-2 md:pt-4 pt-7 sm:space-y-7   space-y-4">

                <!-- Trademark Type -->
                <div>
                  
                  <div class="pt-1 flex gap-6">
                   <img src="@/assets/images/credit_icons.png" alt="">
                  </div>
                </div>

                <div class=" gap-2 block space-y-4 sm:space-y-0 sm:flex">
                   <FormInput  class=" w-1/3" v-model:inputValue="form.full_name"  type="text" :placeholder="true" placeholderLabel="Full Name"  />
                    <FormInput   type="text"  :placeholder="true"  v-model:inputValue="form.last_name" placeholderLabel="Last Name" />
                                      
                </div>
                
                <div class=" gap-2 block space-y-4 sm:space-y-0 sm:flex">
                   <div class=" md:w-1/2 w-full">
                    <FormInput v-model:inputValue="cardNumber"  placeholderLabel="4111 1111 1111 1111" :placeholder="true" type="tex" @input="formatCardNumber" name="businessName" />
                   </div>
                  <div class=" block space-y-4 sm:space-y-0 sm:flex gap-4 md:w-1/2 w-full">
                    <FormInput v-model:inputValue="expiry" placeholderLabel="MM / YY" :placeholder="true" type="text" @input="formatExpiry" name="businessName" />
                    <FormInput v-model:inputValue="cvv" placeholderLabel="cvv"  :placeholder="true" type="text" name="expireddate" />
                  </div>
                </div>
                

                <!-- Business Details -->
                
                 <FormInput  placeholderLabel="Address"  v-model:inputValue="form.address" :placeholder="true" type="text" name="address" />
                <div class=" block space-y-4 sm:space-y-0 sm:flex gap-2">
                 <FormInput  placeholderLabel="Country"  v-model:inputValue="form.country"  :placeholder="true" type="text" name="Country" /> 
                 <FormInput  placeholderLabel="State"  v-model:inputValue="form.state"  :placeholder="true" type="text" name="State" /> 
                 <FormInput  placeholderLabel="City"  v-model:inputValue="form.city"  :placeholder="true" type="text" name="City" /> 
                  <FormInput  placeholderLabel="Zip"  v-model:inputValue="form.zip"  :placeholder="true" type="text" name="Zip" /> 
                 
                </div>

                <!-- Submit Button -->
                <UiButtonsPrimary><span>Pay Now !</span></UiButtonsPrimary>
              </form>

            </div>
          </div>
        </div>

        
        <!-- thanks Template  -->
        <div   v-if="thank_page" class=" md:w-[90%] w-full space-y-4 md:space-x-10">
         

          <div class="w-ful rounded-xl  overflow-hidden l shadow-xl  border ">
            <div class="">
          

              <div class="  bg-primary  text-center py-4 px-4 ">
               <UiTypographyH3 class=" text-white font-bold">Thank You </UiTypographyH3>
              </div>
              <div class=" px-4">
              <UiTypographyP class="text-center text-gray-300 p-6">
                 You have successfully submitted application for your trademark registration!
                </UiTypographyP>

                <UiTypographyP class=" text-center te">
                  We have received all your details and our case filing experts are currently reviewing your trademark application. Please note that we have not yet charged your application fee. You will recieve confirmation call by the assigned case filing officer within 12 hours, after which we will charge the trademark application fee and initiate your trademark registration process.
                </UiTypographyP>

                 <UiTypographyP class="text-center text-gray-300 p-6">
                 Should you have any query, please feel free to reach us at +1 (415) 579 1344 or info@trademarklegalshield.com.
                </UiTypographyP>
              </div>
             

            </div>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const first_form = ref(true)
const second_form = ref(false)
const thank_page = ref(false)
const form = ref({
 
  name: false,
  logo: true,
  logofil: null,
  slogan: false,
  slogan_name: '',
  relname: '',
  business_type: '',
  business_name: '',
  business_industry: '',
  business_description: '',
  logoMark: '',
  trademarkCategory: '',
   full_name: '',
  last_name: '',
  address:'',
  country: '',
  state: '',
  city: '',
  zip: '',
})

// Handle file input
const handleLogoUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    form.value.logofil = file
  }
}

//first form function
const first_submit = () => {
  if (!form.value.name || !form.value.logo || (form.value.slogan )) {
    alert('Please fill all required fields.')
    return
  }
  first_form.value = false
  second_form.value = true
}

// Example submit
const submitForm = () => {
  console.log('Form Submitted:', form.value)
}

const cardNumber = ref('')
const expiry = ref('')
const cvv = ref('')

// Format card number (xxxx xxxx xxxx xxxx)
const formatCardNumber = () => {
  // remove non-digits
  let digits = cardNumber.value.replace(/\D/g, "")

  // limit to max 16 digits
  digits = digits.substring(0, 16)

  // format 4-4-4-4
  cardNumber.value = digits.replace(/(.{4})/g, "$1 ").trim()
}

// Format expiry (MM/YY)
const formatExpiry = () => {
  let digits = expiry.value.replace(/\D/g, "")  // only numbers
  digits = digits.substring(0, 4)               // limit to 4 digits (MMYY)

  if (digits.length >= 3) {
    expiry.value = digits.replace(/(\d{2})(\d{1,2})/, "$1/$2")
  } else {
    expiry.value = digits
  }
}

</script>
