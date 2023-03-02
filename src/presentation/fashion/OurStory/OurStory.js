import { useI18n } from 'vue-i18n';

export default {
  name: 'OurStory',
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
  components: {
  },
};
