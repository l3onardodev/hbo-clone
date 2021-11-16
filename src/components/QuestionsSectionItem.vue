<template>
  <div class="row justify-content-between align-items-center px-0 border-bottom-grey position-relative">
    <button class="bg-transparent border-0 d-flex justify-content-between pt-4" @click="questionOpened = !questionOpened">
        <p class="pale_purple fs-5 fw-light">{{ text }}</p>
        
        <transition name="rotateRight" appear>
            <font-awesome-icon icon="plus" size="2x" class="pale_purple icon" v-if="!questionOpened"/>
        </transition>

        <transition name="rotateLeft" appear>
            <font-awesome-icon icon="minus" size="2x" class="pale_purple icon" v-if="questionOpened"/>
        </transition>
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
    .icon
        position: absolute
        right: 0

    .pale_purple
        color: rgb(158, 134, 255)

    .border-bottom-grey
        border-bottom: 1px solid rgba(255,255,255,0.2)

    .slideTop-enter-active, .slideTop-leave-active
        transition: max-height 2s cubic-bezier(0, 1, 0 ,1)
        
    .slideTop-enter, .slideTop-leave-to
        max-height: 0

    .slideTop-enter-to, .slideTop-leave
        max-height: 114px

    .rotateRight-enter-active, .rotateRight-leave-active
        transition: all .4s ease
        
    .rotateRight-enter
        transform: rotate(-90deg)
        opacity: 0
    
    .rotateRight-leave-to
        transform: rotate(90deg)
        opacity: 0

    .rotateRight-enter-to, .rotateRight-leave
        transform: rotate(0deg)
        opacity: 1

    .rotateLeft-enter-active, .rotateLeft-leave-active
        transition: all .5s ease
        
    .rotateLeft-enter
        transform: rotate(-90deg)
        opacity: 0

    .rotate-enter-to
        transform: rotate(0deg)
        opacity: 1

    .rotateLeft-leave-to 
        transform: rotate(90deg)
        opacity: 0
</style>