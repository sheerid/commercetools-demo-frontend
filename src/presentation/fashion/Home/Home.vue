<script src="./Home.js" />
<style src="./Home.scss" lang="scss"></style>
<i18n src="./Home.txt" lang="yaml"></i18n>

<template>
  <span>
    <Banner />
    <div class="banner-area pt-30">
      <div class="custom-container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-xs-12">
            <div
              class="banner-wrap mb-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div
                class="banner-img banner-hover banner-zoom"
              >
                <router-link to="/products/apparel">
                  <img
                    src="../assets/img/jeans1.jpg"
                    alt="banner"
                  />
                  <div class="banner-content">
                    <h3>{{ t('w_jeans') }}</h3>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-xs-12">
            <div
              class="banner-wrap mb-20 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div
                class="banner-img banner-hover banner-zoom"
              >
                <router-link
                  :to="{
                    //TODO: Change to the proper link with proper categorySlug
                    name: 'home',
                    //params: { categorySlug: 'accessories' },
                  }"
                >
                  <img
                    src="../assets/img/sho3.jpg"
                    alt="banner"
                  />
                  <div class="banner-content">
                    <h3>{{ t('sneakers') }}</h3>
                  </div>
                </router-link>
              </div>
            </div>
            <div
              class="banner-wrap mb-20 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div
                class="banner-img banner-hover banner-zoom"
              >
                <router-link to="/products/apparel">
                  <img
                    src="../assets/img/acc.jpg"
                    alt="banner"
                  />
                  <div class="banner-content">
                    <h3>{{ t('accessories') }}</h3>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-xs-12">
            <div
              class="banner-wrap mb-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div
                class="banner-img banner-hover banner-zoom"
              >
                <router-link
                  :to="{
                    //TODO: Change to the proper link with proper categorySlug
                    name: 'home',
                    //params: { categorySlug: 'accessories' },
                  }"
                >
                  <img
                    src="../assets/img/s3.jpg"
                    alt="banner"
                  />
                  <div class="banner-content">
                    <h3>{{ t('bathing_suits') }}</h3>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottombanner mr-15 ml-15">
      <div v-if="randomImage" class="bottombanner">
        <div
          class="bottombanner__img bottombanner__img1"
          style="cursor: pointer"
          :style="`background-image:url(${require(`../assets/img/MilitaryOffer_banner.jpg`)});`"
          @click="openMilitaryVerificationForm"
        ></div>
        <div
          class="bottombanner__img bottombanner__img2"
          style="cursor: pointer"
          :style="`background-image:url(${require(`../assets/img/MilitaryOffer_block.png`)});`"
          @click="openMilitaryVerificationForm"
        ></div>
      </div>

      <div v-else class="bottombanner">
        <div
          class="bottombanner__img bottombanner__img1"
          style="cursor: pointer"
          :style="`background-image:url(${require(`../assets/img/StudentOffer_banner.jpg`)});`"
          @click="openStudentVerificationForm"
        ></div>
        <div
          class="bottombanner__img bottombanner__img2"
          style="cursor: pointer"
          :style="`background-image:url(${require(`../assets/img/StudentOffer_block.png`)});`"
          @click="openStudentVerificationForm"
        ></div>
      </div>
    </div>

    <div class="service-area pt-70 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div
              class="service-wrap mb-30 wow fadeInUp"
              data-wow-delay="0.1s"
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>
