import { useI18n } from 'vue-i18n';
import useVerification from 'hooks/useVerification';

export default {
  name: 'Footer',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });
    const { openVerificationForm, verified } = useVerification();
//    const { verified } = useVerification();
    return { t, openVerificationForm, verified };
  },
};
