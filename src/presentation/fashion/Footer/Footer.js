import { useI18n } from 'vue-i18n';
import useVerification from 'hooks/useVerification';

export default {
  name: 'Footer',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });
    const pid = getEnv('VUE_APP_LANDING_PROGRAM'); // programID from my.sheerid.com
    const { openVerificationForm, verified } = useVerification(pid);
//    const { verified } = useVerification();
    return { t, openVerificationForm, verified };
  },
};
