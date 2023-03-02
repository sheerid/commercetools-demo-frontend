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
        title: 'Student Offer',
        content: {
          bgClass: 'bg-rt',
          bgImage: 'banner1.jpg',
          h1Message: 'studentOffer',
          h3Message: 'checkOut',
          btnText: 'shopNow',
          position: 'right top',
          link: '/products/apparel',
        },
      },
      {
        title: 'Military Offer',
        content: {
          bgClass: 'bg-cc',
          bgImage: 'banner2.jpg',
          h1Message: 'up50',
          h3Message: 'midSeasonSale',
          btnText: 'shopNow',
          position: 'bottom center',
          link: '/products/apparel',
        },
      },
    ],
  }),
};
