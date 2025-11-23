<template>
  <ClientOnly>
    <Carousel v-bind="carouselConfig">
      <Slide v-for="(testimonial, idx) in testimonials" :key="testimonial.name || idx">
        <div class="carousel__item">
          <div class="flex justify-center mb-8">
            <UiIconsStar class="w-5 text-secondary" v-for="i in 5" :key="i" />
          </div>
          <UiTypographyH3 color="primary" class="text-center">{{ testimonial.quote }}</UiTypographyH3>

          <div class="mt-8 text-center">
            <UiTypographyP class="marcellus">{{ testimonial.name }}</UiTypographyP>
            <UiTypographyP small_text>{{ testimonial.position }}</UiTypographyP>
          </div>
        </div>
      </Slide>
    </Carousel>
  </ClientOnly>
</template>
<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 3000
}

const testimonials = [
  {
    name: "Sarah Delgado",
    position: "Brand Director, Aura Beauty Group",
    quote:
      "Trademax provided a clear, efficient process from start to finish. Their legal guidance was precise, communication was consistent, and our trademark filing moved forward smoothly without delays."
  },
  {
    name: "James Hart",
    position: "CEO, Hart & Co. Apparel",
    quote:
      "The Trademax team handled our application with professionalism and accuracy. Their structured workflow made the entire trademark process straightforward, reliable, and easy for our internal team to manage."
  },
  {
    name: "Lena Cho",
    position: "Marketing Lead, Nexa Digital",
    quote:
      "We appreciated the clarity and consistency Trademax delivered. Their attorney oversight ensured every detail met USPTO standards, giving our organization confidence in the strength of our brand protection."
  },
  {
    name: "Michael Thompson",
    position: "Co-Founder, BrightLeaf Nutrition",
    quote:
      "Trademax made the registration experience organized and predictable. Their team communicated each step clearly, handled all filings accurately, and maintained a professional approach throughout the process."
  },
  {
    name: "Amelia Ruiz",
    position: "Owner, Ruiz Creative Studio",
    quote:
      "The service was efficient, well-managed, and highly professional. Trademax simplified our filing requirements, reviewed our materials thoroughly, and ensured our trademark application progressed without complications."
  },
  {
    name: "David Chan",
    position: "Operations Manager, Vertex Solutions",
    quote:
      "Trademax delivered a streamlined experience with dependable guidance. Their structured approach, timely updates, and attention to compliance made the entire trademark process smooth and predictable for our team."
  }
];

</script>