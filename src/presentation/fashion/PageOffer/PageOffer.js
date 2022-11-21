import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'PageOffer',
  setup() {
    const { t } = useI18n();
    let error = ref(null);
    return {
      error,
      t,
    };
  },
  components: {
  },
};
