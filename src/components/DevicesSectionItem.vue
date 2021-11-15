<template>
  <div class="col-12 col-md-3 py-4">
      <div class="row justify-content-center">
        <font-awesome-icon :icon="icon" size="6x" style="color: #fff"/>
        <h4 class="text-white text-center fw-normal pt-1 m-0">{{ title }}</h4>
        <div class="line my-4"></div>
        <p v-for="option in options" :key="option" class="text-white text-center">{{ option }}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DevicesSectionItem',
    props: {
        icon: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        options: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style lang="sass" scoped>
    p
        line-height: 1rem
    
    .line
        width: 70px
        height: 2px
        border-width: 2px
        background-color: #FF00E5 
</style>