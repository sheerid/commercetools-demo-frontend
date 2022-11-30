import { useI18n } from 'vue-i18n';
import { useVerification } from 'hooks/useVerification';
import getEnv from 'hooks/env';

export default {
  name: 'Footer',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });
    const pid = getEnv('VUE_APP_STUDENT_PROGRAM'); // programID from my.sheerid.com
    const { openVerificationForm, verified } = useVerification(pid);
//    const { verified } = useVerification();
    return { t, openVerificationForm, verified };
  },
};
