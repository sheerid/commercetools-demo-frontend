<style src="./PageOffer.scss" lang="scss"></style>
<i18n src="./PageOffer.txt" lang="yaml"></i18n>
<script src="./PageOffer.js"></script>

<template>
  <div v-if="error">
    Error:
    <pre>{{ JSON.stringify(error, undefined, 2) }}</pre>
  </div>
  <div class="offer-area">
    <div 
        class="custom-container offer-container"
        :style="`background-image:url(${require(`presentation/assets/img/offerbackground.png`)});`"
        >
        <h2>{{ t('title') }}</h2>
        <h3>{{ t('subtitle')}}</h3>
    </div>
  </div>
</template>
