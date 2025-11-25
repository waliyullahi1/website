<template>
  <div>
    <section class="my-10">
      <Container class=" flex justify-center items-center">
        <!-- fist form -->
        <Transition
          appear
          enter-active-class="duration-500 ease-in-out"
          enter-from-class="translate-x-0"
          enter-to-class="translate-x-0"
          leave-active-class="duration-500 ease-in-out"
          leave-from-class="translate-x-0"
          leave-to-class="-translate-x-[200rem]"
          @after-leave="onFirstFormLeave"
        >
          <div v-if="first_form" class="lg:w-2/3 md:w-[90%]">
            <div class="space-y-4 md:space-x-10">
              <div class="text-center">
              <div class="py-2">
                <UiTypographyH2>
                  <span class="font-bold">Step 2</span>
                </UiTypographyH2>
              </div>
              <UiTypographyH3>Trademark Details</UiTypographyH3>
            </div>

            <div class="w-full shadow-xl py-5 border">
              <div class="space-y-3">
                <UiTypographyH3 class="text-center">
                  <span class="font-bold">Fill out this brief form. It takes less than 60 seconds!</span>
                </UiTypographyH3>

                <div class="bg-gray-100 border-l-4 py-4 px-4 border-l-accent-600">
                  <UiTypographyP>
                    <span class="font-bold">Trademark Details</span>
                  </UiTypographyP>
                </div>

                <form @submit.prevent="first_submit" ref="formRef" class="md:px-4 px-2 md:pt-4 pt-2 space-y-7">

                  <!-- Trademark Type -->
                  <div>
                    <label>What are you trying to Trademark?</label>
                    <div class="pt-3 flex gap-6">
                      <FormCheckbox v-model="form.name" label="Name" />
                      <FormCheckbox v-model="form.logo" label="Logo" />
                      <FormCheckbox v-model="form.slogan" label="Slogan" />
                    </div>
                  </div>


                  <!-- for logo and name -->
                  <div class=" flex  gap-6 justify-center items-center">

                    <!-- Logo Upload -->
                    <div v-if="form.logo" :required="form.logo" class="flex items-center gap-2 py-3">

                      <div
                        class="w-40 h-40 border  flex flex-col items-center justify-center bg-secondary duration-500 ease-in-out hover:primary cursor-pointer overflow-hidden"
                        @click="triggerFileInput">
                        <div v-if="!logoPreview" class="text-white">
                            <UiIconsCamera class="w-20 mx-auto" />
                            <UiTypographyP class="mt-2 text-xs">Tap to Upload Logo Mark</UiTypographyP>
                        </div>

                        <!-- AFTER UPLOAD = SHOW IMAGE PREVIEW -->
                        <img v-else :src="logoPreview" class="w-full h-full object-cover" />
                      </div>

                      <!-- HIDDEN FILE INPUT -->
                      <input ref="hiddenFile" type="file" class="hidden" accept="image/*" @change="handleLogoUpload" />

                    </div>

                    <!-- Mark Name -->
                    <div v-if="form.name" class=" w-full">
                      <FormInput :required="form.markname" v-model:inputValue="form.relname" label="Enter Mark Here"
                        type="text" name="markName" />
                    </div>


                  </div>

                  <!-- Slogan -->
                  <div class="" v-if="form.slogan">
                    <FormInput v-model:inputValue="form.slogan_name" :required="form.slogan" label="Enter Slogan Here"
                      type="text" name="slogan" />

                  </div>

                  <!-- Trademark Category -->
                  <FormSelect v-model:selectedOption="form.trademarkCategory" :required="true"
                    label="Please select the entity type that is applying for the trademark:" :options="[
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
                    ]" />

                  <!-- Business Details -->
                  <FormInput v-model:inputValue="form.business_name" :required="true" label="Business Name:" type="text"
                    name="businessName" />
                  <FormInput v-model:inputValue="form.business_industry" :required="true" label="Business Industry:"
                    type="text" name="businessIndustry" />
                  <FormTextarea v-model:inputValue="form.business_description" :required="true"
                    label="Business Description:" name="businessDescription" />

                  <!-- Submit Button -->
                  <FormButton :loading="isLoading" type="submit">Submit</FormButton>
                </form>

              </div>
            </div>
            </div>
          </div>
        </Transition>

        <!-- thanks Template  -->
        <Transition
          appear
          enter-active-class="duration-500 ease-in-out"
          enter-from-class="translate-x-[200rem]"
          enter-to-class="translate-x-0"
          leave-active-class="duration-500 ease-in-out"
          leave-from-class="translate-x-0"
          leave-to-class="-translate-x-[200rem]"
        >
          <div v-if="thank_page" class="md:w-[90%] w-full space-y-4 md:space-x-10">
            <div class="w-full overflow-hidden l shadow-xl  border ">
            <div class="">
              <div class="  bg-primary  text-center py-4 px-4 ">
                <UiTypographyH3 class=" text-white font-bold">Thank You </UiTypographyH3>
              </div>
              <div class=" px-4">
                <UiTypographyP class="text-center text-gray-300 p-6">
                  You have successfully submitted application for your trademark registration!
                </UiTypographyP>

                <UiTypographyP class=" text-center te">
               We have received all your information, and our case filing experts are currently reviewing your trademark application. Please note that your application fee has not been charged yet. A case officer will contact you within 12 hours to confirm the details, after which the fee will be processed.
                </UiTypographyP>

                <UiTypographyP class="text-center text-gray-300 p-6">
                  Should you have any query, please feel free to reach us at +1 (415) 579 1344 or
                 trademaxproject@gmail.com
                </UiTypographyP>
              </div>
            </div>
            </div>
          </div>
        </Transition>
      </Container>
    </section>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, nextTick } from "vue";
import { useFormStore } from "@/stores/formStore";
import { useRouter } from 'vue-router'
const router = useRouter()
const formRef = ref(null);
import emailjs from "@emailjs/browser";
// Pinia store
const formStore = useFormStore();
const personal_details = formStore.form;
// Form states
const first_form = ref(true);
const thank_page = ref(false);
const isLoading = ref(false);

// Main form object
const form = ref({
  name: false,
  markname: '',
  phone_number: "",
  email: "",
  message: "",
  logo: true,
  logofil: null,
  slogan: false,
  slogan_name: "",
  relname: "",
  business_type: "",
  business_name: "",
  business_industry: "",
  business_description: "",
  trademarkCategory: "",
  full_name: "",
  last_name: "",
  address: "",
  country: "",
  state: "",
  city: "",
  zip: "",
});


// Pre-populate form with store data
form.value.email = personal_details.email;
form.value.phone_number = personal_details.phone;
form.value.message = personal_details.message


// File input refs
const hiddenFile = ref(null);
const logoPreview = ref(null);

// Trigger hidden file input
const triggerFileInput = () => {
  hiddenFile.value.click();
};

// Handle logo upload
const handleLogoUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.logofil = file;
    logoPreview.value = URL.createObjectURL(file);
  }
};

// WATCH LOGO CHECKBOX → CLEAR FILE WHEN UNCHECKED
watch(
  () => form.value.logo,
  (newVal) => {
    if (!newVal) {
      form.value.logofil = null;
    }
  }
);

// FIRST FORM SUBMIT
const first_submit = async () => {
  isLoading.value = true;

  // Validate form
  if (!form.value.name && !form.value.logo && !form.value.slogan) {
    alert("Please select at least one: Name, Logo or Slogan.");
    isLoading.value = false;
    return;
  }

  if (form.value.logo && form.value.logofil === null) {
    alert("Please upload a logo file.");
    isLoading.value = false;
    return;
  }

  if (!form.value.trademarkCategory) {
    alert("Please select a trademark category.");
    isLoading.value = false;
    return;
  }

  // Send email and transition to thank you page
  try {
    await sendEmailAsync();
    first_form.value = false;
    await nextTick();
    thank_page.value = true;
  } catch (err) {
    console.log("FAILED...", err);
    alert("Failed to submit form. Please try again.");
  } finally {
    isLoading.value = false;
  }
};

// Callback after first form leaves
const onFirstFormLeave = () => {
  // Animation complete
};



// Make sendEmail async
const sendEmailAsync = () => {
  return new Promise((resolve, reject) => {
    const data = {
      fullname: personal_details.fullname,
      email: form.value.email,
      markname: form.value.markname,
      phone_number: form.value.phone_number,
      business_name: form.value.business_name,
      business_description: form.value.business_description,
      slogan_name: form.value.slogan_name,
      business_type: form.value.business_type,
      message: form.value.message,
      trademarkCategory: form.value.trademarkCategory,
      full_name: form.value.full_name,
      address: form.value.address,
      country: form.value.country,
      state: form.value.state,
      city: form.value.city,
    };

    // Send email to admin
    emailjs
      .send("service_t82t6hd", "template_7pr5mtt", data, {
        publicKey: "xEftJyIuvEr9QtFsD",
      })
      .then(() => {
        // Send confirmation email to user
        return sendUserConfirmationEmail(form.value.email, personal_details.fullname);
      })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        console.log("FAILED...", err);
        reject(err);
      });
  });
};

// Send confirmation email to user
const sendUserConfirmationEmail = (userEmail, userName) => {
  return new Promise((resolve, reject) => {
    const confirmationData = {
      email: userEmail,
      full_name: userName,
      subject: "Trademark Registration Submission Received"
    };

    emailjs
      .send("service_t82t6hd", "template_sv9kf7t", confirmationData, {
        publicKey: "xEftJyIuvEr9QtFsD",
      })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        console.log("User confirmation email failed...", err);
        // Don't reject here - the main submission was successful
        resolve();
      });
  });
};



// ON MOUNT → Set email and phone from store
onMounted(() => {
  // Auth check - redirect if email or phone missing
  if (!personal_details.email || !personal_details.phone) {
    console.log('Missing email or phone, redirecting to contact-us');
    router.push('./contact-us');
  }
});
</script>
