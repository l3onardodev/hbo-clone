<template>
  <div class="row justify-content-between align-items-center border-bottom px-0">
    <button class="bg-transparent border-0 d-flex justify-content-between pt-4" @click="questionOpened = !questionOpened">
        <p class="pale_purple fs-5 fw-light">{{ text }}</p>
        <font-awesome-icon icon="plus" size="2x" class="pale_purple"/>
    </button>
    <transition name="slideTop" appear>
        <div v-if="questionOpened" class="overflow-hidden">
            <p class="text-white">{{ sub_text }}</p>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'QuestionsSectionItem',
    data() {
        return {
            questionOpened: false, 
        }
    },
    props: {
        text: {
            type: String,
            required: true,
        },
        sub_text: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="sass" scoped>
    .pale_purple
        color: rgb(158, 134, 255)

    .slideTop-enter-active, .slideTop-leave-active
        transition: max-height .5s ease-in
        
    .slideTop-enter, .slideTop-leave-to
        max-height: 0

    .slideTop-enter-to, .slideTop-leave
        max-height: 114px
</style>