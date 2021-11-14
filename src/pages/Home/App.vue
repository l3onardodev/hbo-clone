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
      <div class="row pt-5" style="border: 1px solid red">
        <div class="col-12">
          <p class="fs-5 text-white text-center">Alerta de spoiler: a HBO Max tem novidades para você</p>
        </div>
        <div class="col-12">
          <div class="row justify-content-center">
            <div class="slider w-100" style="height: 200px;">
              <div class="slider-track" style="height: 100px;">
                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'"></home-slider-item>

                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'"></home-slider-item>

                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'"></home-slider-item>

                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'"></home-slider-item>

                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'"></home-slider-item>

                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'"></home-slider-item>

                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'"></home-slider-item>

                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'"></home-slider-item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-xl py-5">
      <div class="row justify-content-center">
        <p class="text-white text-center h4 fw-normal">Uma experiência simples e completa</p>
        <p class="small-paragraph text-center">A compatibilidade varia de acordo com o plano.</p>

        <img src="https://hbomax-images.warnermediacdn.com/2021-08/br_devices_trophy.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=1007" class="img-fluid px-5" v-once>
      </div>
    </section>
    <section class="container">
        <div class="row py-5">
          <section-2-item :text="'Crie até 5 perfis e receba recomendações personalizadas para cada um'"/>
          <section-2-item :text="'Baixe qualquer conteúdo disponível para assistir offline'"/>
          <section-2-item :text="'Defina o conteúdo que as crianças podem assistir de acordo com cada faixa etária'"/>
          <section-2-item :text="'Adicione seus títulos favoritos para assistir quando quiser'"/>
        </div>
    </section>
    <section></section>
  </div>
</template>

<script>
import HomeNavBar from '../../components/HomeNavBar.vue'
import HomeSliderItem from '../../components/HomeSliderItem.vue'
import Section2Item from '../../components/Section2Item.vue'

export default {
  name: 'App',
  components: {
    HomeNavBar,
    HomeSliderItem,
    Section2Item
  },
}
</script>

<style lang="sass" scoped>
  .header-content 
    bottom: 0

  .letter-spacing 
    letter-spacing: 0.8px

  .small-paragraph
    color: rgba(255, 255, 255, 0.6)
    font-size: 0.7rem

  .header__bottom-text
    color: rgba(255, 255, 255, 0.7)
    font-size: 11px
    line-height: 14px

  .slider
    height: 250px
    position: relative
    width: 100%
    display: grid
    place-items: center
    overflow: hidden

    &::before,
    &::after
      content: ""
      height: 250px
      position: absolute
      width: 200px
      z-index: 2
    
    &::after 
      right: 0
      top: 0
      transform: rotateZ(180deg)

    &::before 
      left: 0
      top: 0

  .slider-track
    display: flex
    width: calc(200px * 8)
    animation: scrollSlider 20s linear infinite

  @keyframes scrollSlider
    from
      transform: translateX(0)
    to
      transform: translateX(calc(-200px * 4))

</style>
