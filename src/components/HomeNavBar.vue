<template>
  <div class="container-fluid nav-bar">
          <div class="row justify-content-between h-100">
            <div class="col-4 col-md-5 h-100 py-2">
                <img src="../assets/images/home-page/hbo-logo.svg" class="img-fluid h-100" v-once>
            </div>
            <div class="col-7 col-md-5">
                <div class="row h-100 justify-content-end">
                    <div class="col h-100">
                        <div class="row h-100 align-items-center">
                            <button class="nav-bar__btn bg-transparent border-0">entrar</button>
                        </div>
                    </div>
                    <div class="col-7 h-100">
                        <div class="row h-100 align-items-center">
                            <button class="w-auto nav-bar__btn nav-bar__second-btn px-md-4 py-1 py-md-2">experimente grátis</button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'HomeNavBar'
}
</script>

<style lang="sass" scoped>
    .nav-bar 
        height: 53px
        background-color: rgba(0, 0, 0, 0.25)
            
    .nav-bar__btn 
        color: rgbb(248,249,250)
        font-weight: 700
        letter-spacing: .2em
        text-transform: uppercase

    .nav-bar__second-btn
        background-color: #b535f6
        color: #fff
        border: 2px solid transparent
        border-radius: 50rem
</style>