<template>
    <div class="col-12 col-md-3">
        <div class="row justify-content-center">
            <div class="line my-4"></div>
            <p class="text-white text-center fw-light w-100 px-4 px-md-3">{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Section2Items',
    props: {
        text: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="sass" scoped>
    .line
        width: 45px
        height: 2px
        border-width: 2px
        background-color: #FF00E5 

    p
        line-height: 1.6rem
        font-size: 20px
</style>