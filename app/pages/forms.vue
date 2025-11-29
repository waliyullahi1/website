<template>
  <div>
    <section class="my-10">
      <Container class=" flex justify-center items-center">

        <!-- Show thank you page after submission -->
        <div v-if="showThankYou" class="lg:w-2/3 md:w-[90%] w-full">
          <div class="w-full overflow-hidden shadow-xl border rounded-lg">
            <div class="bg-primary text-center py-8 px-4">
              <div class="flex justify-center mb-4">
                <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span class="text-primary text-4xl">✓</span>
                </div>
              </div>
              <UiTypographyH2 class="text-white font-bold">Thank You!</UiTypographyH2>
            </div>
            <div class="px-8 py-10 text-center">
              <UiTypographyP class="text-lg text-gray-700 mb-4">
                We have received your trademark registration submission.
              </UiTypographyP>
              <UiTypographyP class="text-gray-600">
                Our team will review your application and contact you shortly.
              </UiTypographyP>
            </div>
          </div>
        </div>

        <!-- Progressive disclosure form -->
        <div v-else class="lg:w-2/3 md:w-[90%] w-full space-y-6">

          <!-- Header -->
          <div class="text-center">
            <UiTypographyH2>
              <span class="font-bold">Trademark Registration Form</span>
            </UiTypographyH2>
            <UiTypographyP class="text-gray-600 mt-2">Complete both sections to submit your application</UiTypographyP>
          </div>

          <!-- Section 1: Trademark Details -->
          <div class="w-full shadow-xl border" :class="section1Complete ? 'bg-gray-50' : 'bg-white'">
            <!-- Section 1 Header -->
            <div
              class="bg-gray-100 border-l-4 py-4 px-4 border-l-accent-600 flex justify-between items-center cursor-pointer"
              @click="toggleSection1"
            >
              <div class="flex items-center gap-3">
                <span v-if="section1Complete" class="text-green-600 text-2xl">✓</span>
                <UiTypographygitP>
                  <span class="font-bold">Section 1: Trademark Details</span>
                </UiTypographygitP>
              </div>
              <span v-if="section1Complete" class="text-sm text-gray-600">Click to edit</span>
            </div>

            <!-- Section 1 Content (collapsible) -->
            <div v-show="!section1Complete || section1Expanded" class="space-y-3 py-5">
              <UiTypographyH3 class="text-center px-4">
                <span class="font-bold">Fill out this brief form. It takes less than 60 seconds!</span>
              </UiTypographyH3>

              <form @submit.prevent="completeSection1" ref="formRef" class="md:px-4 px-2 md:pt-4 pt-2 space-y-7">

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
                  <div class="flex flex-col md:flex-row gap-6 items-center">

                    <!-- Logo Upload -->
                    <div v-if="form.logo" :required="form.logo" class="flex flex-col">
                      <label class="text-sm font-medium text-gray-700 mb-3">Upload Logo</label>

                      <div
                        class="relative w-48 h-48 border-2 border-dashed rounded-lg flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 duration-300 ease-in-out cursor-pointer overflow-hidden group"
                        :class="logoPreview ? 'border-primary' : 'border-gray-300'"
                        @click="triggerFileInput">

                        <!-- Upload prompt -->
                        <div v-if="!logoPreview" class="text-center px-4">
                          <UiIconsCamera class="w-16 mx-auto text-gray-400 group-hover:text-primary transition-colors" />
                        </div>

                        <!-- Image preview with overlay -->
                        <div v-else class="relative w-full h-full">
                          <img :src="logoPreview" class="w-full h-full object-contain p-2" />
                          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                            <UiTypographyP class="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                              Click to change
                            </UiTypographyP>
                          </div>
                        </div>
                      </div>

                      <!-- HIDDEN FILE INPUT -->
                      <input ref="hiddenFile" type="file" class="hidden" accept="image/*" @change="handleLogoUpload" />
                    </div>

                    <!-- Name and Slogan -->
                    <div class="w-full space-y-7">
                    <div v-if="form.name" class="w-full">
                      <FormInput :required="form.markname" v-model:inputValue="form.relname" label="Enter Mark Here"
                        type="text" name="markName" />
                    </div>

                    <div class="" v-if="form.slogan">
                      <FormInput v-model:inputValue="form.slogan_name" :required="form.slogan" label="Enter Slogan Here"
                      type="text" name="slogan" />
                    </div>
                    </div>


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

                  <!-- Submit Button for Section 1 -->
                  <FormButton :loading="isLoadingSection1" type="submit">Continue to Contact Information</FormButton>
                </form>
            </div>
          </div>

          <!-- Section 2: Contact Information -->
          <div class="w-full shadow-xl border" :class="!section1Complete ? 'opacity-50 pointer-events-none' : 'bg-white'">
            <!-- Section 2 Header -->
            <div class="bg-gray-100 border-l-4 py-4 px-4 border-l-accent-600 flex justify-between items-center">
              <div class="flex items-center gap-3">
                <UiTypographyP>
                  <span class="font-bold">Section 2: Contact Information</span>
                </UiTypographyP>
              </div>
              <span v-if="!section1Complete" class="text-sm text-gray-500">Complete Section 1 to continue</span>
            </div>

            <!-- Section 2 Content -->
            <div v-if="section1Complete" class="space-y-3 py-5">
              <UiTypographyH3 class="text-center px-4">
                <span class="font-bold">Almost done! Please provide your contact details</span>
              </UiTypographyH3>

              <form @submit.prevent="submitFinalForm" class="md:px-4 px-2 md:pt-4 pt-2 space-y-7">
                <FormInput v-model:inputValue="contactForm.fullname" label="Full Name" type="text" :required="true" name="fullname" />
                <FormInput v-model:inputValue="contactForm.email" label="Email Address" type="email" :required="true" name="email" />
                <FormInput v-model:inputValue="contactForm.phone" label="Phone Number" type="tel" :required="true" name="phone" />
                <FormTextarea v-model:inputValue="contactForm.message" label="Message (Optional)" :required="false" name="message" />

                <!-- Final Submit Button -->
                <FormButton :loading="isLoadingFinal" type="submit">Submit Application</FormButton>
              </form>
            </div>
          </div>

        </div>
      </Container>
    </section>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import emailjs from '@emailjs/browser';

const formRef = ref(null);

// Section states
const section1Complete = ref(false);
const section1Expanded = ref(false);
const showThankYou = ref(false);
const isLoadingSection1 = ref(false);
const isLoadingFinal = ref(false);

// Section 1: Trademark Details form
const form = ref({
  name: false,
  markname: '',
  logo: true,
  logofil: null,
  slogan: false,
  slogan_name: "",
  relname: "",
  business_name: "",
  business_industry: "",
  business_description: "",
  trademarkCategory: "",
});

// Section 2: Contact Information form
const contactForm = ref({
  fullname: "",
  email: "",
  phone: "",
  message: "",
});

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

// Toggle Section 1 expansion (when complete)
const toggleSection1 = () => {
  if (section1Complete.value) {
    section1Expanded.value = !section1Expanded.value;
  }
};

// Complete Section 1 and move to Section 2
const completeSection1 = async () => {
  isLoadingSection1.value = true;

  // Validate form
  if (!form.value.name && !form.value.logo && !form.value.slogan) {
    alert("Please select at least one: Name, Logo or Slogan.");
    isLoadingSection1.value = false;
    return;
  }

  if (form.value.logo && form.value.logofil === null) {
    alert("Please upload a logo file.");
    isLoadingSection1.value = false;
    return;
  }

  if (!form.value.trademarkCategory) {
    alert("Please select a trademark category.");
    isLoadingSection1.value = false;
    return;
  }

  // Mark section 1 as complete and collapse it
  section1Complete.value = true;
  section1Expanded.value = false;
  isLoadingSection1.value = false;

  // Scroll to Section 2
  setTimeout(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, 100);
};

// Send user confirmation email
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
        console.log("Confirmation email failed:", err);
        // Don't reject here - the main submission was successful
        resolve();
      });
  });
};

// Submit final form (Section 2)
const submitFinalForm = async () => {
  isLoadingFinal.value = true;

  // Validate contact form
  if (!contactForm.value.fullname || !contactForm.value.email || !contactForm.value.phone) {
    alert("Please fill in all required fields.");
    isLoadingFinal.value = false;
    return;
  }

  try {
    // Prepare data for brand email
    const data = {
      fullname: contactForm.value.fullname,
      email: contactForm.value.email,
      phone_number: contactForm.value.phone,
      message: contactForm.value.message,
      markname: form.value.relname,
      slogan_name: form.value.slogan_name,
      business_name: form.value.business_name,
      business_industry: form.value.business_industry,
      business_description: form.value.business_description,
      trademarkCategory: form.value.trademarkCategory
    };

    // Send email to brand/admin
    await emailjs.send("service_t82t6hd", "template_7pr5mtt", data, {
      publicKey: "xEftJyIuvEr9QtFsD",
    });

    // Send confirmation email to user
    await sendUserConfirmationEmail(contactForm.value.email, contactForm.value.fullname);

    // Show thank you page
    showThankYou.value = true;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (err) {
    console.log("FAILED...", err);
    alert("Failed to submit form. Please try again.");
  } finally {
    isLoadingFinal.value = false;
  }
};




</script>
