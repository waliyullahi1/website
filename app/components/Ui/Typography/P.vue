<template>
  <p :class="[  small_text ? 'text-sm lg:text-base' : 'text-base lg:text-lg']" class="font-normal">
    <slot/>
  </p>
</template>
<script>
  export default {
    props: {
      color: String,
      small_text: Boolean
    }
  }
</script>