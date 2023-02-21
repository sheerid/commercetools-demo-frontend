import { useI18n } from 'vue-i18n';
import Banner from 'presentation/Banner/Banner.vue';
import BaseMoney from 'presentation/components/BaseMoney/BaseMoney.vue';
import { useRouter } from 'vue-router';
import { useVerification } from 'hooks/useVerification';
import getEnv from 'hooks/env';

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
    const { openVerificationForm: openStudentVerificationForm, verified: studentVerified } = useVerification(getEnv('VUE_APP_STUDENT_LANDING'));
    const { openVerificationForm: openMilitaryVerificationForm, verified: militaryVerified } = useVerification(getEnv('VUE_APP_MILITARY_LANDING'));
    return {
      openStudentVerificationForm,
      openMilitaryVerificationForm,
      studentVerified,
      militaryVerified,
      randomImage,
      t,
    };
  },
};
