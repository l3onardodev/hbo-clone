<template>
  <div class="px-2" style="width: 200px">
      <img :src="img_url" class="w-100">
      <p class="fw-bold text-center text-uppercase">{{ text }}</p>
  </div>
</template>

<script>
export default {
    name: 'HomeSliderItem',
    props: {
        img_url: {
            type: String,
            required: false,
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="sass" scoped>
    img
        width: 250px
        border: 1px solid #5b1ce6
        border-radius: 0.3rem

    p
        color: rgba(255, 255, 255, 0.6)
        font-size: 0.7rem
        letter-spacing: 0.2em
</style>