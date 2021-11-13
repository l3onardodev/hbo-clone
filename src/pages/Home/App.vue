<template>
  <div id="app" class="bg-secondary">
    <home-nav-bar/>
    <header class="container-fluid p-0 no-gutters bg-secondary vh-100">
      <video-background 
      :src="require('../../assets/videos/headerBg.mp4')"
      style="height: 80%; width: 100%; transform: translateY(53px)"
      overlay="linear-gradient(0deg, rgb(3, 3, 40, 1) , rgb(3, 3, 40, 0.3), transparent)"
      >
      </video-background>
      <div class="container-xxl position-absolute header-content">
        <div class="col">
          <p class="text-white text-uppercase h2 text-center fw-light letter-spacing">as melhores séries e filmes</p>
          <p class="text-white text-uppercase h1 text-center letter-spacing" style="font-weight: 500">grátis por 7 dias</p>
          <div class="row justify-content-center">
            <img src="https://hbomax-images.warnermediacdn.com/2021-09/hero_promo_purpline.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" class="img-fluid w-50 pb-3" v-once>
          </div>
          
          <p class="text-white text-center">Após esse período, assinaturas a partir de R$14,16/mês* no plano anual.</p>

          <div class="row justify-content-center">
            <b-button pill variant="primary" class="position-relative header-button text-uppercase text-white fw-bold px-4 py-2 w-auto" style="letter-spacing: 0.14em">experimente grátis</b-button>
          </div>
          <div class="row justify-content-center">
            <p class="text-center py-2 w-25 header__bottom-text">O período de teste gratuito é apenas para novos assinantes. Restrições se aplicam</p>
          </div>
        </div>
      </div>
    </header>
    <section class="container-fluid py-4">
      <div class="row justify-content-center pt-5" style="border: 1px solid red">
        <p class="fs-5 text-white text-center">Alerta de spoiler: a HBO Max tem novidades para você</p>
      </div>
    </section>
  </div>
</template>

<script>
import HomeNavBar from '../../components/HomeNavBar.vue'

export default {
  name: 'App',
  components: {
    HomeNavBar,
  }
}
</script>

<style lang="sass" scoped>
  .header-content 
    bottom: 0

  .letter-spacing 
    letter-spacing: 0.8px

  .header__bottom-text
    color: rgba(255, 255, 255, 0.7)
    font-size: 11px
    line-height: 14px
</style>
