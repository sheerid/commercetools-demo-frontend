import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });
    return {
      t,
    };
  },
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    autoPlaying: true,
    internalAutoPlaying: true,
    slides: [
      {
        title: 'Slide 1',
        content: {
          bgImage: 'banner2.jpg',
          h3Message: 'midSeasonSale',
          h1Message: 'up50',
          bttnText: 'shopNow',
          position: 'top',
          link: 'militaryoffer',
        },
      },
      {
        title: 'Slide 2',
        content: {
          bgImage: 'banner1.jpg',
          h3Message: 'checkOut',
          h1Message: 'studentOffer',
          bttnText: 'shopNow',
          position: 'middle',
          link: 'studentoffer',
        },
      },
    ],
  }),
};
