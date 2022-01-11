<template>
  <div class="container-fluid nav-bar position-fixed">
    <div class="d-flex justify-content-between align-items-center h-100">
      <div class="d-flex h-100 align-items-center px-1 py-1 py-md-0">
        <img
          src="../assets/images/home-page/hbo-logo.svg"
          class="img-fluid py-1 py-md-0 h-50 h-md-75"
          v-once
          style="-webkit-filter: invert(100%)"
        />
      </div>
      <div>
        <button class="nav-bar__btn bg-transparent border-0 px-3 px-md-4">
          entrar
        </button>
        <button
          class="
            w-auto
            nav-bar__btn nav-bar__second-btn
            px-3 px-md-4
            py-1 py-md-2
          "
        >
          experimente grátis
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNavBar",
};
</script>

<style lang="sass" scoped>
.nav-bar
  height: 53px
  background-color: rgba(0, 0, 0, 0.25)
  z-index: 2

.nav-bar__btn
  color: rgba(248,249,250)
  font-weight: 700
  letter-spacing: .2em
  text-transform: uppercase

.nav-bar__second-btn
    background-color: #b535f6
    border: 2px solid transparent
    border-radius: 50rem
</style>
