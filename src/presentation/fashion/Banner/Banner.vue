<script src="./Banner.js" />
<style src="./Banner.scss" lang="scss"></style>
<i18n src="./Banner.txt" lang="yaml"></i18n>

<template>
  <transition name="slide-fade" appear>
    <vueper-slides
      autoplay
      class="slider-area"
      fixed-height="480px"
      :arrows="false"
      :pause-on-hover="false"
      :fade="true"
      :bulletsOutside="true"
    >
      <vueper-slide v-for="(slide, i) in slides" :key="i">
        <template v-slot:content="">
          <router-link
            :to="slide.content.link"
            class="animated"
          >
            <div
              class="single-slider bg-img slider-height-2 flex content-center"
              :style="`background-position:${
                slide.content.position
              };   background-repeat: no-repeat; background-origin: content-box; background-size: cover; background-image:url(${require(`presentation/assets/img/${slide.content.bgImage}`)});`"
            >
              <div class="container">
                <div class="slide-text">
                  <h1
                    style="
                      font-family: 'Baskerville';
                      color: white;
                      font-weight: 700;
                      font-size: 5em;
                    "
                  >
                    {{ t(slide.content.h1Message) }}
                  </h1>
                  <h3
                    class="mt-40"
                    style="
                      color: white;
                      font-weight: 600;
                      font-size: 2em;
                    "
                  >
                    {{ t(slide.content.h3Message) }}
                  </h3>
                  <h4
                    class="mt-40"
                    style="
                      color: white;
                      text-decoration: underline;
                      font-size: 1.5rem;
                    "
                  >
                    {{ t(slide.content.btnText) }}
                  </h4>
                </div>
              </div>
            </div>
          </router-link>
        </template>
      </vueper-slide>
    </vueper-slides>
  </transition>
</template>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 2s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
