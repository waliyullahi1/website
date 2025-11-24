<template>
    <div>
        <Trademarkform ref="trademarkformFunctions" />
        <!-- Hero section about us -->
        <section class=" hero bg-[url('/images/law.jpg')] bg-cover bg-no-repeat  ">
          <div class=" bg-black/70 pb-10 pt-20">
              <Container class=" ">
                <div class="md:w-1/2 text-white">
                    <UiTypographyP color="white">
                        <span class=" font-bold">About Us</span>
                    </UiTypographyP>
                    <div class=" py-2">
                        <UiTypographyH1 color="white">
                            <span class="  font-bold">About Trademax</span>
                        </UiTypographyH1>
                    </div>
                    <UiTypographyP color="white">
                        We understand that your brand is more than just a name or logo — it’s the foundation of your
                        business identity and reputation
                    </UiTypographyP>
                    <div class="pt-4 sm:flex block sm:space-y-0  space-y-4 sm:space-x-4">
                        <UiButtonsPrimary @click="openform"><span>Register My Trademark</span></UiButtonsPrimary>
                        <UiButtonsSecondary @click="openChat" color="white"><span>Live Chat</span></UiButtonsSecondary>
                    </div>

                </div>
            </Container>
          </div>
        </section>

        <!-- reason-choose-us  details here -->
        <section class=" reason-choose-us ">
            <Container>

                <div class=" space-y-5 text-center">
                    <UiTypographyP class=" text-center "> <span class=" bg-accent-200 e px-2 py-1 font-bold">Why Choose
                            Us</span></UiTypographyP>
                    <UiTypographyH2> <span class="  font-extrabold">Reasons to Choose Trademark Legal Shield</span>
                    </UiTypographyH2>
                    <div
                        class=" w-full grid  lg:md:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 justify-betweencpc items-center mt-4">

                        <div v-for="value in reasonChooseUsList" :key="value.id" class="h-full">
                            <div class=" group border sm:p-5 p-4 gap-4 flex flex-col items-center  w-full h-full  ">


                                <div
                                    class=" rounded-full sm:p-4 p-3  bg-accent-100 group-hover:bg-white flex w-fit items-center">
                                    <img :src="`/image/${value.image}`" class=" w-10" :alt="`${value.title} Icon`">
                                </div>


                                <div class=" text-center">
                                    <UiTypographyH3>
                                        <span class=" font-black font-extrold"><strong>{{ value.title }}</strong></span>
                                    </UiTypographyH3>
                                    <UiTypographyP>
                                        <span class="  text-sm text-gray-600 text-center font-bold">
                                            {{ value.description }}
                                        </span>
                                    </UiTypographyP>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </Container>
        </section>

        <!-- Simple Process Steps  details here -->
        <section class=" bg-gray-100/50 reason-choose-us ">
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

        <!-- Secure Your Brand   section -->
        <section class=" bg-gray-100/50 reason-choose-us ">
            <Container>
                <div class="  lg:flex gap-5 ">


                    <div class=" lg:w-1/2 w-full space-y-5 r">
                        <UiTypographyP class=" "> <span class=" bg-accent-200 e px-2 py-1 font-bold">Protect Your
                                Brand</span></UiTypographyP>
                        <UiTypographyH2> <span class=" sm:text-5xl text-3xl leading-snug font-extrabold">  Safeguard Your Brand Identity Today</span>
                        </UiTypographyH2>
                        <UiTypographyP>
                            In today’s competitive marketplace, securing your brand is more important than ever.
                            Registering your trademark is the most effective way to protect your business identity. It
                            grants you exclusive legal rights to your brand name, logo, or slogan, ensuring others
                            cannot misuse or imitate your intellectual property. <br><br>

                            At Trademax, we streamline the entire registration process for you. Our team
                            manages every step—from conducting detailed trademark searches to preparing and filing your
                            application with the United States Patent and Trademark Office (USPTO). <br><br>

                            With our knowledgeable experts, your application is handled with precision and compliance,
                            reducing delays and improving your chances of approval. Our transparent pricing and
                            dedicated support give you the confidence that your brand is protected nationwide. Whether
                            you’re a new business or an established company, Trademark Legal Shield is committed to
                            preserving the unique identity that makes your brand stand out.
                        </UiTypographyP>
                        <div class="pt-4 sm:flex block sm:space-y-0  space-y-4 sm:space-x-4">
                            <UiButtonsPrimary @click="openform"><span>Register My Trademark</span></UiButtonsPrimary>
                            <UiButtonsSecondary @click=""><span>Live Chat</span></UiButtonsSecondary>
                        </div>



                    </div>
                    <div class=" hidden h-fit lg:flex">
                        <img src="@/assets/images/secure-your-brand.png" alt="secure your brands" srcset="">
                    </div>
                </div>
            </Container>
        </section>

        <!--  section click to register your trademark  -->
        <section class=" bg-[url('/images/statue-of-liberty.jpg')] bg-cover bg-no-repeat   bg-c">
           <div class=" pb-10 pt-20   bg-black/50">
             <Container>
                <div class="md:w-1/2 text-white">

                    <div class=" py-2">
                        <UiTypographyH1 color="white">
                            <span class=" leading-tight  font-bold">Get Your Trademark Registered with Us</span>
                        </UiTypographyH1>
                    </div>
                    <UiTypographyP color="white">
                        Start your trademark application today and gain the peace of mind that comes with knowing your
                        brand is fully protected under U.S. law.
                    </UiTypographyP>
                    <div class="pt-4 sm:flex block sm:space-y-0  space-y-4 sm:space-x-4">
                        <UiButtonsPrimary @click="openform"><span>Register My Trademark</span></UiButtonsPrimary>
                        <UiButtonsSecondary  @click="openChat" color="white"><span>Live Chat</span></UiButtonsSecondary>
                    </div>

                </div>
            </Container>
           </div>
        </section>

        <!-- FAQS Sections -->
        <section class="  reason-choose-us ">
            <Container>
                <div class="  h- lg:flex gap-5 ">
                    <div class=" hidden lg:flex">
                        <img src="@/assets/images/faq-img.png" alt="Simple Process Steps" srcset="">
                    </div>

                    <div class=" lg:w-1/2 w-full space-y-5 r">
                        <UiTypographyP class=" "> <span class=" bg-accent-200 e px-2 py-1 font-bold">FAQs</span>
                        </UiTypographyP>
                        <UiTypographyH2> <span class=" sm:text-5xl text-3xl leading-snug font-extrabold">Frequently
                                Asked Quetions</span>
                        </UiTypographyH2>
                        <UiTypographyP>Got questions? Find quick answers to common trademark concerns here.
                        </UiTypographyP>
                        <div class="relative mt-4 justify-betwee space-y-6  flex flex-col    ">

                            <div v-for="faq in faqList" :key="faq.id"
                                class="flex justify-between shadow-sm  border bg-white p-4 items-start gap-2 sm:gap-5">


                                <div class=" space-y-2">
                                    <UiTypographyP><span class="font-bold">{{ faq.title }}</span></UiTypographyP>
                                    <div :class="faq.showdescription ? ' md:20 h-24 ' : ' h-0  overflow-hidden '"
                                        class=" duration-500">
                                        <UiTypographyP>
                                            {{ faq.description }}
                                        </UiTypographyP>
                                    </div>
                                </div>
                                <button @click="toggleDescription(faq)" type="button" class=" ">
                                    <UiTypographyH3><span class=" font-bold text-xl"> <strong>{{ faq.showdescription ?
                                        '-' : '+' }}</strong> </span></UiTypographyH3>
                                </button>
                            </div>

                        </div>



                    </div>
                </div>
            </Container>
        </section>

        <!-- Testimonials  section -->
        <section class="  reason-choose-us ">
            <Container>
                <div class=" h-fit  overflow-hidden  lg:flex gap-5 ">


                    <div class="  lg:w-1/2 w-full space-y-5 r">
                        <UiTypographyP class=" "> <span class=" 0 e px-2 py-1 font-bold">Testimonials</span>
                        </UiTypographyP>
                        <UiTypographyH2> <span class=" sm:text-5xl text-3xl leading-snug font-extrabold">What Our Client
                                Says</span>
                        </UiTypographyH2>
                        <UiTypographyP>Trusted by businesses nationwide for reliable trademark protection.
                        </UiTypographyP>
                        <div class="pt-4 bg-gray-100 0  sm:flex block sm:space-y-0  space-y-4 sm:space-x-4">
                            <Carousel />
                        </div>



                    </div>
                    <div class=" hidden lg:flex">
                        <img src="@/assets/images/feedback-image.jpg" alt="secure your brands" srcset="">
                    </div>
                </div>
            </Container>
        </section>








    </div>
</template>

<script setup>
import { ref } from 'vue'

//Refs
const trademarkformFunctions = ref(null)


//Data lists
const reasonChooseUsList = ref([
    {
        id: 1,
        title: 'Expert Guidance',
        description: 'Our skilled trademark professionals provide informed, precise support throughout the entire application process.',
        image: 'expert-icon.png'
    },
    {
        id: 2,
        title: 'Comprehensive Solutions',
        description: 'We deliver complete trademark services — from detailed searches and application drafting to ongoing monitoring and renewals.',
        image: 'comprise-icon.png'
    },
    {
        id: 3,
        title: 'Transparent & Affordable Pricing',
        description: 'Our pricing structure is clear, competitive, and designed to offer premium service without unexpected costs.',
        image: 'affordable-icon.png'
    },
    {
        id: 4,
        title: 'Dedicated Client Support',
        description: 'Our support team is committed to providing timely, reliable assistance at every stage of your trademark journey.',
        image: 'dedicated-icon.png'
    }
])







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

const faqList = ref([
    {
        id: 1,
        title: 'Q1: What is a trademark, and why is it important?',
        description: 'A trademark protects your brand name, logo, or slogan from unauthorized use. It secures your business identity and strengthens customer trust.',
        showdescription: false
    },
    {
        id: 2,
        title: 'Q2: Can I register a trademark in multiple classes?',
        description: 'Yes. You can file a trademark across multiple classes. Our Standard, Deluxe, and Platinum plans support multi-class applications with additional services.',
        showdescription: false
    },
    {
        id: 3,
        title: 'Q3: Do you handle the full trademark registration process?',
        description: 'Absolutely. We take care of everything — from conducting a trademark search to filing your application and managing all USPTO correspondence.',
        showdescription: false
    },
    {
        id: 4,
        title: 'Q4: What are USPTO fees, and are they included in your pricing?',
        description: 'USPTO filing fees are government charges set by the United States Patent and Trademark Office and vary by class. These fees are not included in our service pricing and are paid directly to the USPTO.',
        showdescription: false
    }
])




//Functions 
const openform = () => {
    trademarkformFunctions.value.openForm()
}

const openChat = ()=>{
     if (window.Tawk_API) {
    window.Tawk_API.maximize();
  }
}



const toggleDescription = (item) => {
    faqList.value.forEach(faq => {
        if (faq.id !== item.id) {
            faq.showdescription = false     // close all others
        }
    })
    item.showdescription = !item.showdescription
}
</script>