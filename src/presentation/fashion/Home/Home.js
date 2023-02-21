import { useI18n } from 'vue-i18n';
import Banner from 'presentation/Banner/Banner.vue';
import BaseMoney from 'presentation/components/BaseMoney/BaseMoney.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Home',
  components: { Banner, BaseMoney },

  setup() {
    const router = useRouter();
    if (window.innerWidth < 990) {
      router.replace({
        name: 'products',
        params: { categorySlug: 'all' },
      });
    }
    // 50% chance
    const randomImage = Math.random() < 0.5;
    const { t } = useI18n();
    return {
      randomImage,
      t,
    };
  },
};
