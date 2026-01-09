<template>
  <div class=" bg-[#FEFEFE]">
    <!-- <UiTypographyH1 color="secondary" class="text-center pt-28 mb-1">United States</UiTypographyH1> -->
    <header class="mt-0 h-[100vh] pt-1 hero-section">
      <Container :addTopBottomPadding="false" class="text-white h-full flex items-center">
        <div class="lg:w-[50%] md:w-4/5 w-full h-fit">

          <div class="space-y-3 py-2">
            <UiTypographyP color="white" class="font-bold hero-fade-up delay-1">
              <span class="font-bold">Ready to Protect Your Brand</span>
            </UiTypographyP>

            <UiTypographyH1 class="font-bold py-2 hero-fade-up delay-2" color="white">
              We Make U.S. Trademark Registration Stress-Free.
            </UiTypographyH1>
          </div>

          <UiTypographyP color="white" class="hero-fade-up delay-3">
            We understand that your brand is more than just a name or logo — it’s the foundation of your
            business identity and reputation
          </UiTypographyP>

          <div class="pt-4 sm:flex block sm:space-y-0 space-y-4 sm:space-x-4 hero-fade-up delay-4">
            <UiButtonsPrimary @click="openform">
              <span>Register My Trademark</span>
            </UiButtonsPrimary>

            <UiButtonsSecondary @click="openChat" color="white">
              <span>Live Chat</span>
            </UiButtonsSecondary>
          </div>

        </div>
      </Container>
    </header>



    <section>
      <Container class="text-center">
        <UiTypographyH2 class=" font-bold">An Intellectual Property Law Firm <br class=" hidden sm:block"> that Disrupts
          the Status Quo
        </UiTypographyH2>
        <div class=" py-4 flex justify-center items-center">
          <UiTypographyP class=" w-full md:w-[70%] text-center text-gray-500">Our IP law firm moves beyond traditional
            firm models
            – we offer
            flat-fee trademark fees and flexible pricing structures that eliminate outdated invoicing.No hourly
            surprises, just aligned strategy and transparent guidance from a trademark attorney.</UiTypographyP>
        </div>

        <div class="  block  md:flex justify-between pt-20  items-center">
          <div class=" md:w-1/2 w-full  h-fit text-left">

            <UiTypographyH2 class=" font-extrabold">Transparent and Fair Billing for <br> Intellectual Property
              Services</UiTypographyH2>
            <UiTypographyP color="white" class="max-w-2xl mt-2 mx-auto">Secure your name, logo, or slogan with fast,
              affordable trademark registration backed by expert legal guidance.</UiTypographyP>

            <div class="grid gap-2 my-4">
              <UiTypographyP class="flex items-center gap-4">
                <UiIconsCheck class="text-red-500 w-6" />
                Maximise your chances for successful TM registration
              </UiTypographyP>
              <UiTypographyP class="flex items-center  gap-4">
                <UiIconsCheck class="text-red-500 w-6" />
                Flat-fee pricing with no hidden costs
              </UiTypographyP>
              <UiTypographyP class="flex items-center r gap-4">
                <UiIconsCheck class=" text-red-500 w-6" />
                Experienced legal team in your corner, just 1-click away
              </UiTypographyP>
            </div>



          </div>
          <div
            class=" md:w-1/2 w-full hidden sm:block rounded-md overflow-hidden  bg-black bg-[url('assets/images/company-image.webp')]">
            <img src="@/assets/images/company-image.webp" alt="">
          </div>
        </div>

        <div>

        </div>
      </Container>
    </section>
    <!-- hidden this section (what are will do) -->
    <Container class=" hidden lg:grid-cols-2 gap-12 lg:gap-28 items-start">
      <div>
        <UiTypographyP small_text class="flex items-center gap-2 mb-2 uppercase">
          <span class="h-1 aspect-square rounded-full bg-red-500" v-for="i in 2"></span>
          What we do
        </UiTypographyP>
        <UiTypographyH2 class="" color="primary">
          Expert Trademark Protection Backed by Trusted Legal Professionals
        </UiTypographyH2>
        <UiTypographyP class="mt-4 text-gray-500">
          From comprehensive searches to strategic filing and rigorous defense, {{ projectName }} provides the full
          spectrum of trademark services designed to secure and strengthen your brand across the U.S.
        </UiTypographyP>
      </div>

      <div class=" grid md:grid-cols-2  gap-12">
        <div>
          <img src="/images/doc_search.svg" class="w-14" />
          <UiTypographyH3 class="mt-2">Trademark Search & Clearance</UiTypographyH3>
        </div>
        <div>
          <img src="/images/doc_stamp.svg" class="w-14" />
          <UiTypographyH3 class="mt-2">USPTO Trademark Filing</UiTypographyH3>
        </div>
        <div>
          <img src="/images/response.svg" class="w-14" />
          <UiTypographyH3 class="mt-2">Office Action Responses</UiTypographyH3>
        </div>
        <div>
          <img src="/images/renewal.svg" class="w-14" />
          <UiTypographyH3 class="mt-2">Trademark Renewals</UiTypographyH3>
        </div>
      </div>
    </Container>


    <!-- Simple Process Steps  details here -->
    <section class="  hidden bg-gray-100/50 reason-choose-us ">
      <Container>
        <div class="  lg:flex gap-5 ">
          <div class=" hidden  w lg:flex">
            <img src="@/assets/images/three-steps-your-brand.png" class="" alt="Simple Process Steps" srcset="">
          </div>

          <div class=" lg:w-1/2 w-full space-y-5 r">
            <UiTypographyP class="">
              <span class="bg-accent-200 px-2 py-1 font-bold">Simple Process Steps</span>
            </UiTypographyP>

            <UiTypographyH2>
              <span class="sm:text-5xl text-3xl leading-snug font-extrabold">
                Three Steps to Register Your Brand’s Trademark
              </span>
            </UiTypographyH2>

            <UiTypographyP>
              Registering your trademark is now more straightforward than ever.
              At Trademax, we’ve created a smooth and efficient three-step
              process that minimizes confusion, avoids unnecessary delays, and saves you time.
              Whether you're a startup founder, a growing business owner, or managing an established
              brand, our skilled trademark experts handle every part of your application with precision,
              compliance, and care.
            </UiTypographyP>

            <div
              class="relative mt-4 space-y-6  flex flex-col   before:content-['']  before:block before:absolute before:inset-0   before:-z-10   before:top-0  before:left-5  before:sm:left-7  before:w-1   before:h-4/5   before:bg-gray-600">

              <div v-for="value in stepToTakeList" :key="value" class="flex  items-start gap-2 sm:gap-5">
                <div
                  class="rounded-full bg-white sm:border-8 border-4 flex justify-center items-center border-accent-300 p-4 sm:w-16 w-10 h-10 sm:h-16">
                  <UiTypographyH3><strong>0{{ value.id }}</strong></UiTypographyH3>
                </div>

                <div>
                  <UiTypographyH3><span class="font-bold">{{ value.title }}</span></UiTypographyH3>
                  <UiTypographyP>
                    {{ value.description }}
                  </UiTypographyP>
                </div>
              </div>

            </div>



          </div>
        </div>
      </Container>
    </section>


    <!-- hidden this section (what are will do) -->
    <Container class="text-center  ">
      <UiTypographyP small_text class="flex items-center justify-center gap-2 mb-2 uppercase">
        <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
        How it Works
        <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
      </UiTypographyP>
      <UiTypographyH2 class="max-w-2xl mx-auto">
        A Streamlined, Attorney-Managed Trademark Process
      </UiTypographyH2>
      <UiTypographyP>Professional oversight, clear communication, and fast turnaround — trademark registration made
        effortless.</UiTypographyP>

      <div class="grid lg:grid-cols-3 gap-8 mt-16">
        <div class="  p-6">

          <img src="/images/form-upload.svg" class="  w-14 mb-6 mx-auto" alt="Form Submit">


          <UiTypographyH3>Submit Your Details</UiTypographyH3>
          <UiTypographyP class=" text-sm text-gray-600"> Share your brand name, logo, and essential business information
            using our secure online form.
            Clear, simple, and guided from the start.</UiTypographyP>
        </div>
        <div class=" flex flex-col justify-center items-center p-6">

          <img src="/images/form-filing.svg" class=" w-14 mb-6 mx-auto" alt="Form filing">


          <UiTypographyH3 class=" font-bold">We Handle the Filing</UiTypographyH3>
          <UiTypographyP class=" text-sm text-gray-600">SOur legal team conducts a professional trademark search,
            prepares your application, and files
            it with the USPTO on your behalf — with precision and compliance built in.
            Nothing for you to figure out. We manage everything.</UiTypographyP>
        </div>
        <div class=" flex flex-col justify-center items-center p-6">
          <img src="/images/protection.svg" class="w-14 mb-6 mx-auto" alt="Shield / Protection">
          <UiTypographyH3>Get Official Protection</UiTypographyH3>
          <UiTypographyP class=" text-sm text-gray-600">Once approved by the USPTO, your trademark is officially
            registered, giving you exclusive
            nationwide rights and long-term brand protection.Your identity secured — professionally and efficiently.
          </UiTypographyP>
        </div>
      </div>

      <UiButtonsPrimary @click="openform" class="mx-auto mt-16">Register My Trademark</UiButtonsPrimary>
    </Container>

    <section class=" bg-opacity-40" id="pricing">
      <Container>
        <div class=" mx-auto">
          <!-- <UiTypographyP small_text class="flex items-center justify-center gap-2 mb-2 uppercase">
            <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
            Our Pricing
            <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
          </UiTypographyP> -->

          <UiTypographyP class=" text-center">
            <span class="bg-accent-200 px-2  py-1 font-bold"> Our Pricing</span>
          </UiTypographyP>

          <UiTypographyH2 class="text-center mx-auto">Simple, Transparent Pricing</UiTypographyH2>
          <!-- <span class="sm:text-2xl text-center text-3xl leading-snug font-extrabold">
                Simple, Transparent Pricing
              </span> -->
          <div class=" hidden md:grid-cols-2 xl:grid-cols-2 mt-16 gap-4">

            <div class="border border-accent-300 hover:border-secondary p-6 bg-white">
              <UiTypographyP class="uppercase font-bold"><strong>Basic</strong></UiTypographyP>
              <UiTypographyP small_text class="">Best for startups needing protection in one trademark class with simple
                requirements.</UiTypographyP>
              <UiTypographyH2 color="secondary" class="mt-4">$45</UiTypographyH2>
              <UiTypographyP>+ filing fee ($350/class)</UiTypographyP>

              <ul class="list-inside list-disc h-44 overflow-y-scroll mt-6">
                <li>Case Review</li>
                <li>Case Filing</li>
                <li>Basic Search</li>
                <li>State E-Filing</li>
                <li>Trademark Secured</li>
                <li>*(Govt. filing fee not included)</li>
              </ul>

              <UiButtonsPrimary @click="openform" flexdisplay class="mt-6">Get Started</UiButtonsPrimary>
            </div>

            <div class="border border-accent-300 hover:border-secondary p-6 bg-white">
              <UiTypographyP class="uppercase font-bold"><strong>Standard</strong></UiTypographyP>
              <UiTypographyP small_text class="">Great for small businesses covering multiple product or service
                classes.
              </UiTypographyP>
              <UiTypographyH2 color="secondary" class="mt-4">$149</UiTypographyH2>
              <UiTypographyP>+ filing fee ($350/class)</UiTypographyP>

              <ul class="list-inside list-disc h-44 overflow-y-scroll mt-6">
                <li>Case Review</li>
                <li>Case Filing</li>
                <li>Direct Hit Search</li>
                <li>Trademark Alerts</li>
                <li>Trademark Secured</li>
                <li>High Satisfaction Rate</li>
                <li>Refusal Risk Meter</li>
                <li>*(Govt. filing fee not included)</li>
              </ul>

              <UiButtonsPrimary @click="openform" flexdisplay class="mt-6">Get Started</UiButtonsPrimary>
            </div>

            <div class="border border-accent-300 hover:border-secondary p-6 bg-white">
              <UiTypographyP class="uppercase font-bold"><strong>Deluxe</strong></UiTypographyP>
              <UiTypographyP small_text class="">For brands needing extra support, including help with USPTO office
                actions.</UiTypographyP>
              <UiTypographyH2 color="secondary" class="mt-4">$299</UiTypographyH2>
              <UiTypographyP>+ filing fee ($350/class)</UiTypographyP>

              <ul class="list-inside list-disc h-44 overflow-y-scroll mt-6">
                <li>Case Review</li>
                <li>Case Filing</li>
                <li>Direct Hit Search</li>
                <li>Trademark Alerts</li>
                <li>Trademark Secured</li>
                <li>High Satisfaction Rate</li>
                <li>Refusal Risk Meter</li>
                <li>Trademark Monitoring</li>
                <li>Complete Documentation</li>
                <li>Digital File</li>
                <li>Dedicated Case Manager</li>
                <li>*(Govt. filing fee not included)</li>
              </ul>

              <UiButtonsPrimary @click="openform" flexdisplay class="mt-6">Get Started</UiButtonsPrimary>
            </div>

            <div class="border border-accent-300 hover:border-secondary p-6 bg-white">
              <UiTypographyP class="uppercase font-bold"><strong>Platinum</strong></UiTypographyP>
              <UiTypographyP small_text class="">All-inclusive plan with monitoring, renewals, and full legal
                assistance.
              </UiTypographyP>
              <UiTypographyH2 color="secondary" class="mt-4">$299</UiTypographyH2>
              <UiTypographyP>+ filing fee ($350/class)</UiTypographyP>

              <ul class="list-inside list-disc h-44 overflow-y-scroll mt-6">
                <li>Case Review</li>
                <li>Case Filing</li>
                <li>Direct Hit Search</li>
                <li>Trademark Alerts</li>
                <li>Trademark Secured</li>
                <li>High Satisfaction Rate</li>
                <li>Refusal Risk Meter</li>
                <li>Trademark Monitoring</li>
                <li>Complete Documentation</li>
                <li>Digital File</li>
                <li>Dedicated Case Manager</li>
                <li>High Approval Rate</li>
                <li>Comprehensive Trademark Search Report (Federal & State)</li>
                <li>High Priority Service</li>
                <li>cease & desist letter</li>
                <li>*(Govt. filing fee not included)</li>
              </ul>

              <UiButtonsPrimary @click="openform" flexdisplay class="mt-6">Get Started</UiButtonsPrimary>
            </div>

          </div>
          <div class="grid md:grid-cols-2 xl:grid-cols-3 mt-16 gap- ">

            <div v-for="(item, index) in prices" :key="index" class="group xl:last:col-start-2 flex justify-center">
              <div
                class="rounded-2xl p-6 bg-white group-hover:shadow-2xl shadow-xl group-hover:scale-105 h scale-95 duration-150 max-w-sm w-full">

                <div class="bg-[#3D7B7B] rounded-xl w-fit px-4">
                  <p class="text-white py-1 mb-5 text-lg font-medium">
                    {{ item.package }} Registration
                  </p>
                </div>

                <UiTypographyP small_text>
                  Best for startups needing protection in one trademark class with simple requirements.
                </UiTypographyP>

                <UiTypographyH2 color="secondary" class="mt-4">
                  <span class="text-4xl">{{ item.price }}</span>
                </UiTypographyH2>

                <UiTypographyP>
                  <span class=" font-bold ">+</span> filing fee
                  <span class="text-white bg-red-700 font-semibold px-2 py-1 text-sm rounded-lg">
                    ($350/class)
                  </span>
                </UiTypographyP>

                <ul class="list-inside h-48 custom-scroll list-disc overflow-y-auto mt-6">
                  <li v-for="value in item.list">{{ value }}</li>
                </ul>

                <UiButtonsPrimary @click="openform()"
                  class="mt-6 hover:bg-gray-500  duration-500 w-full h-10 rounded-md  font-medium bg-gray-300">
                  Get Started
                </UiButtonsPrimary>

              </div>
            </div>

          </div>


        </div>

      </Container>
    </section>

    <section class="  reason-choose-us ">
      <Container>
        <div class=" h-fit  overflow-hidden items-center  lg:flex gap-5 ">


          <div class="  lg:w-1/2 w-full space-y-5 r">
            <UiTypographyP small_text class="flex items-center justify-center gap-2 mb-2 uppercase">
              <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
              Testimonials
              <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
            </UiTypographyP>
            <UiTypographyH2 class="text-center mx-auto">
              Happy Users Say About Us
            </UiTypographyH2>
            <div class="pt-4 bg-gray-100 0  sm:flex block sm:space-y-0  space-y-4 sm:space-x-4">
              <Testimonials class=" w-[90%]"></Testimonials>
            </div>



          </div>
          <div class=" hidden lg:flex">
            <img src="@/assets/images/feedback-image.jpg" alt="secure your brands" srcset="">
          </div>
        </div>
      </Container>
    </section>

    <Container class=" hidden ">
      <UiTypographyP small_text class="flex items-center justify-center gap-2 mb-2 uppercase">
        <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
        Testimonials
        <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
      </UiTypographyP>
      <UiTypographyH2 class="text-center mx-auto">
        Happy Users Say About Us
      </UiTypographyH2>

      <div class="mt-16 flex-col lg:flex-row flex items-center justify-between">
        <img src="/images/quote-left.svg" class="w-40 opacity-10" alt="">
        <Testimonials class="lg:max-w-2xl"></Testimonials>
        <img src="/images/quote-right.svg" class="w-40 opacity-10" alt="">
      </div>
    </Container>

    <section class="bg-neutral-100 " id="faqs">
      <Container>
        <UiTypographyP small_text class="flex items-center justify-center gap-2 mb-2 uppercase">
          <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
          FAQs & A
          <span class="h-1 aspect-square rounded-full bg-secondary" v-for="i in 2"></span>
        </UiTypographyP>
        <UiTypographyH2 class="text-center">Get every answer</UiTypographyH2>

        <Accordion class="mt-16 max-w-2xl mx-auto">
          <AccordionItem>
            <template #accordion-trigger>
              How long does the trademark registration process take?
            </template>
            <template #accordion-content>
              <li>The full process typically takes several months, depending on USPTO review times. We monitor your
                application closely and keep you updated at each stage.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              What information do I need to start a trademark application?
            </template>
            <template #accordion-content>
              <li>You’ll need your business name, logo or slogan, a description of your goods or services, and proof of
                use if applicable. We’ll guide you through each required detail.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              What happens if the USPTO issues an Office Action?
            </template>
            <template #accordion-content>
              <li>If the USPTO raises questions or objections, we prepare and file the appropriate response on your
                behalf. This helps keep your application on track.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              Do I need to have a registered business before filing a trademark?
            </template>
            <template #accordion-content>
              <li>No, you can apply as an individual or entity. Many clients secure their trademarks before finalizing
                their business registrations.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              Can I trademark a name that is already in use?
            </template>
            <template #accordion-content>
              <li>It depends on the similarity of the goods or services and the likelihood of confusion. Our trademark
                search helps determine whether your mark is available.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              What is the difference between ™ and ® symbols?
            </template>
            <template #accordion-content>
              <li>The ™ symbol can be used without registration, while the ® symbol is reserved for trademarks
                officially registered with the USPTO.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              Will my trademark protect me internationally?
            </template>
            <template #accordion-content>
              <li>A U.S. trademark protects your mark only within the United States. However, we can assist with
                international filings through additional processes.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              Can I make changes to my trademark after it’s filed?
            </template>
            <template #accordion-content>
              <li>Minor adjustments may be allowed, but material changes generally require a new application. We review
                any updates to ensure compliance.</li>
            </template>
          </AccordionItem>

          <AccordionItem>
            <template #accordion-trigger>
              How do I maintain my trademark once it’s registered?
            </template>
            <template #accordion-content>
              <li>Trademarks require periodic renewals and ongoing use. We remind you of upcoming deadlines and offer
                maintenance support to keep your mark active.</li>
            </template>
          </AccordionItem>

        </Accordion>
      </Container>
    </section>

    <section class="cta">
      <Container class="sm:text-center text-left  text-white">
        <UiTypographyH2 color="white">Don't Risk Your Brand's Future!</UiTypographyH2>
        <UiTypographyP color="white" class="max-w-2xl mx-auto">Unregistered trademarks can lead to costly legal battles.
          Protect your brand with {{ projectName }}'s expert services—fast, reliable, and hassle-free. Secure your
          exclusive
          rights now before it's too late!</UiTypographyP>

        <div class="mt-16 sm:flex  space-y-3 block gap-8 ">
          <UiButtonsPrimary @click="openform" class="hover:bg-white hover:text-secondary">Register My Trademark
          </UiButtonsPrimary>
          <UiButtonsSecondary class="hover:text-white hover:border-white">Get in touch</UiButtonsSecondary>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Button from '~/components/Form/Button.vue'

const config = useRuntimeConfig()
const projectName = config.public.projectName
const router = useRouter()

const openChat = () => {

}
const openform = () => {
  console.log('sssss');
  
  router.push('/forms')
}

const stepToTakeList = ref([
  {
    id: 1,
    title: 'Send Us Your Info',
    description: 'Share your business name, logo, and basic details using our secure online form.',
  },
  {
    id: 2,
    title: 'We Do the Filing for You',
    description: 'Our team checks for similar trademarks, prepares your application, and files it with the USPTO.',
  },
  {
    id: 3,
    title: 'Receive Your Trademark',
    description: 'After approval, your trademark gets officially registered and protected across the country.',
    image: 'ongoing-icon.png'
  }
])

const prices = ref([
  {
    package: 'Basic',
    description: 'Best for startups needing protection in one trademark class with simple requirements.',
    price: '$45',
    list: [
      'Case Review',
      'Case', 'Basic Search', 'State E-Filing', 'Trademark Secured', '*(Govt. filing fee not included)']
  },
  {
    package: 'Standard',
    description: 'Great for small businesses covering multiple product or service classes.',
    price: '$149',
    list: [
      'Case Review',
      'Case', 'Basic Search', 'Direct Hit Search', 'Trademark Alerts', 'Trademark Secured', 'High Satisfaction Rate', 'Refusal Risk Meter', '*(Govt. filing fee not included)']
  },
  {
    package: 'Deluxe',
    description: 'For brands needing extra support, including help with USPTO office actions.',
    price: '$299',
    list: [
      'Case Review',
      'Case', 'Basic Search', 'Direct Hit Search', 'Trademark Alerts', 'Trademark Secured', 'High Satisfaction Rate', 'Refusal Risk Meter', 'Trademark Monitoring', 'Complete Documentation', 'Digital File', 'Dedicated Case Manager', '*(Govt. filing fee not included)']
  },
  {
    package: 'Deluxe',
    description: 'For brands needing extra support, including help with USPTO office actions.',
    price: '$299',
    list: [
      'Case Review',
      'Case', 'Basic Search', 'Direct Hit Search', 'Trademark Alerts', 'Trademark Secured', 'High Satisfaction Rate', 'Refusal Risk Meter', 'Trademark Monitoring', 'Complete Documentation', 'Digital File', 'Dedicated Case Manager', '*(Govt. filing fee not included)']
  }
])
</script>

<style>
header {
  background: linear-gradient(rgba(0, 0, 0, 0.838), rgba(0, 0, 0, 0.7)), url('/images/law.jpg');
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}



.cta {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/statue-of-liberty.jpg');
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}

.custom-scroll::-webkit-scrollbar {
  width: 6px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background: #b78d46;
  border-radius: 10px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
  background: #9e7636;
}
</style>