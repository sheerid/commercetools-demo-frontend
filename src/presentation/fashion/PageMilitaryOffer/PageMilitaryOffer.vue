<style src="../PageStudentOffer/PageStudentOffer.scss" lang="scss"/>
<i18n src="./PageMilitaryOffer.txt" lang="yaml"></i18n>
<script src="./PageMilitaryOffer.js"></script>

<template>
    <div v-if="error">
        Error:
        <pre>{{ JSON.stringify(error, undefined, 2) }}</pre>
    </div>
    <div class="offer-area">
        <div class="custom-container offer-container row"
            :style="`background-image:url(${require(`presentation/assets/img/militarykidlaptop.jpg`)});`">
            <div class="column left">
                <h2>{{ t('title') }}</h2>
                <h3>{{ t('subtitle') }}</h3>
                <a class="button"><span>{{ t('shareOffer') }}</span></a>
                <h4>{{ t('subHeader') }}</h4>
                <p>{{ t('point1') }}</p>
            </div>
            <div class="column form" v-if="!verified || !verified.res?.personInfo">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sheerid/jslib@1/sheerid.css" type="text/css"/>
                <div id="my-container"></div>
            </div>
            <div v-else class="column form bg-white"><img
                  alt=""
                  :src="
                    require('presentation/assets/img/sheerid_logo.jpg')
                  "
                /><p>You have been successfully verified for serving with {{verified.res?.personInfo?.organization.name}}.</p>
            </div>
        </div>
    </div>
</template>
