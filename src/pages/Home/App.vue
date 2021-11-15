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
                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'" :width="200"></home-slider-item>

                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'" :width="200"></home-slider-item>

                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'" :width="200"></home-slider-item>

                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'" :width="200"></home-slider-item>

                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'" :width="200"></home-slider-item>

                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'" :width="200"></home-slider-item>

                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'" :width="200"></home-slider-item>

                <home-slider-item :img_url="'https://hbomax-images.warnermediacdn.com/2021-09/pretty-little-liars.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com'" :text="'em breve'" :width="200"></home-slider-item>
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
    <section class="container">
      <div class="row align-items-center justify-content-center py-3">
        <div class="col-12 col-md-4">
          <img src="https://hbomax-images.warnermediacdn.com/2021-05/ben10.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=486" class="img-fluid" v-once>
        </div>
        <div class="col-12 col-md-4">
          <h4 class="text-white text-center">A HBO Max traz diversão para a família toda</h4>
        </div>
        <div class="col-12 col-md-4">
          <img src="https://hbomax-images.warnermediacdn.com/2021-05/fam_and_kids-looney_toons-img.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=480" class="img-fluid" v-once>
        </div>
      </div>
    </section>
    <section class="container-fluid py-3 section-experimente-gratis-background">
      <div class="container py-4">
        <div class="col">
          <div class="row justify-content-center">
            <img src="https://hbomax-images.warnermediacdn.com/2021-07/bpo_1.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=1215" class="img-fluid w-75 mb-2" v-once>
          </div>

          <div class="row justify-content-center">
            <b-button pill variant="primary" class="text-uppercase w-auto text-white px-4 fw-bold letter-spacing my-4">experimente grátis</b-button>
          </div>

          <div class="row">
            <p class="text-white text-center">O período de teste gratuito é apenas para novos assinantes. Restrições se aplicam.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="container py-5 d-none d-lg-block">
      <div class="row py-4 align-items-center">
        <div class="col container-shadow-effect">
          <div class="row">
            <div class="col shadow-effect">
              <img src="https://hbomax-images.warnermediacdn.com/2021-03/euphoria-_1_0.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=170" class="w-100 mx-1 img-shadow-effect">
            </div>
            <div class="col shadow-effect">
              <img src="https://hbomax-images.warnermediacdn.com/2021-03/euphoria-_1_0.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=170" class="w-100 mx-1 img-shadow-effect">
            </div>
            <div class="col shadow-effect">
              <img src="https://hbomax-images.warnermediacdn.com/2021-03/euphoria-_1_0.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=170" class="w-100 mx-1 img-shadow-effect">
            </div>
          </div>
          <div class="row py-4">
            <div class="col shadow-effect">
              <img src="https://hbomax-images.warnermediacdn.com/2021-03/euphoria-_1_0.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=170" class="w-100 mx-1 img-shadow-effect">
            </div>
            <div class="col shadow-effect">
              <img src="https://hbomax-images.warnermediacdn.com/2021-03/euphoria-_1_0.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=170" class="w-100 mx-1 img-shadow-effect">
            </div>
            <div class="col shadow-effect">
              <img src="https://hbomax-images.warnermediacdn.com/2021-03/euphoria-_1_0.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=170" class="w-100 mx-1 img-shadow-effect">
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row justify-content-center">
            <h4 class="text-white text-center fw-semi-bold pt-3">Curta episódios completos gratuitos sem a necessidade de assinatura.</h4>
            <b-button pill variant="success" class="text-uppercase fw-bold w-auto my-5 px-4 py-2 button-white-hover shadow">assista agora</b-button>
          </div>
        </div>
      </div>
    </section>
    <section class="container py-5">
      <div class="row">
        <h4 class="text-white fw-semi-bold text-center">Assista a HBO Max em seus dispositivos preferidos</h4>
        <p class="text-white letter-spacing text-center small-paragraph">A compatibilidade varia de acordo com o plano.</p>
      </div>
      <div class="row py-5">
        <devices-section-item :icon="'tv'" :title="'Smart TVs'" :options="['Samsung', 'LG', 'Roku', 'Android TV', 'Apple TV', 'Chromecast']"/>
        <devices-section-item :icon="'laptop'" :title="'Computadores'" :options="['Chrome OS', 'MacOS', 'Windows PC']"/>
        <devices-section-item :icon="'gamepad'" :title="'Video-games'" :options="['Xbox One', 'Xbox Series XIS']"/>
        <devices-section-item :icon="'tablet-alt'" :title="'Smartphones e Tablets'" :options="['Android Phone & Tablet', 'iPhone & iPad']"/>
      </div>
    </section>
    <section class="container">
      <div class="col">
        <div class="row">
          <h4 class="text-white text-center fw-semi-bold">Ficou com alguma dúvida? A gente tem a resposta.</h4>
        </div>
        <div class="col py-4">
          <questions-section-item :text="'Receberei um período de teste gratuito para se comprar desde HBOMAX.COM?'" :sub_text="'Começando no 1 de agosto de 2021, todos os nossos novos assinantes através de HBOMAX.COM receberão um período de teste gratuito de 7 dias. Este período de teste e suas condições serão anunciados no momento em que você iniciar o processo de compra. Lembre-se de que o período de teste só será oferecido para novas contas. Se você já tinha uma conta no HBO Max e vai criar uma nova, o período de teste não será oferecido e o sistema passará a cobrar pelo serviço a partir do primeiro dia de assinatura.'"/>
          
          <questions-section-item :text="'Receberei um período de teste gratuito para se comprar desde HBOMAX.COM?'" :sub_text="'Se uma assinatura ou oferta promocional inclui um período de teste gratuito, os critérios de qualificação são mencionados no momento em que você inicia o processo de assinatura. Você está qualificado para um período de teste se nunca tiver criado uma assinatura da HBO Max antes. Se, em algum momento no passado, você teve uma assinatura ou iniciou um processo de assinatura na HBO Max, é possível que você não poda se qualificar para um período de teste gratuito. Os critérios de elegibilidade para um período de teste são mencionados no momento em que você cria sua assinatura.'"/>
          
          <questions-section-item :text="'Receberei um período de teste gratuito para se comprar desde HBOMAX.COM?'" :sub_text="'Durante o período de teste gratuito, você terá acesso ilimitado a todo o conteúdo da HBO Max'"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HomeNavBar from '../../components/HomeNavBar.vue'
import HomeSliderItem from '../../components/HomeSliderItem.vue'
import Section2Item from '../../components/Section2Item.vue'
import DevicesSectionItem from '../../components/DevicesSectionItem.vue'
import QuestionsSectionItem from '../../components/QuestionsSectionItem.vue'

export default {
  name: 'App',
  components: {
    HomeNavBar,
    HomeSliderItem,
    Section2Item,
    DevicesSectionItem,
    QuestionsSectionItem
  },
}
</script>

<style lang="sass" scoped>
  .section-experimente-gratis-background
    background-image: url('https://hbomax-images.warnermediacdn.com/2021-07/promo-banner-bg-dsk.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=1400')
    background-repeat: no-repeat
    background-size: cover

  .header-content 
    bottom: 0

  .letter-spacing 
    letter-spacing: 0.8px

  .shadow-effect
    position: relative

    &::before
      content: ''
      position: absolute
      width: 86%
      height: 98%
      z-index: 1
      box-shadow: 30px 30px 60px rgba(255, 0, 100, 0.2), -30px -30px 60px rgba(0, 100, 255, 0.2)
      transform: translateX(3px) translateY(3px)

  .img-shadow-effect
    position: relative
    border: 1px solid #5b1ce6
    border-radius: 5px
    z-index: 2

  .button-white-hover
    transition: all .4s ease
    border: 2px solid #fff
    letter-spacing: .18em
    color: #030328

    &:hover
      background: none
      border-color: #fff
      color: #fff

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
