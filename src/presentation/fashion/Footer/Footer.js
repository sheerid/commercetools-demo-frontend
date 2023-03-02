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
    const { openVerificationForm: openStudentVerificationForm, verified: studentVerified } = useVerification(getEnv('VUE_APP_STUDENT_LANDING'));
    const { openVerificationForm: openMilitaryVerificationForm, verified: militaryVerified } = useVerification(getEnv('VUE_APP_MILITARY_LANDING'));
    const { openVerificationForm: openFirstResponderVerificationForm, verified: firstResponderVerified } = useVerification(getEnv('VUE_APP_FIRST_RESPONDER_LANDING'));
    return { 
      t, 
      openStudentVerificationForm, 
      openMilitaryVerificationForm, 
      openFirstResponderVerificationForm, 
      studentVerified, 
      militaryVerified, 
      firstResponderVerified
    };
  },
};
