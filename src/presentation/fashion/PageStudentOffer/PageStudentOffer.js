import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { poll, restartPolling, stopPolling, getUUID } from 'hooks/useVerification';
import getEnv from 'hooks/env';

const verificationUrl = "https://services.sheerid.com/verify/";
const pid = getEnv('VUE_APP_STUDENT_PROGRAM'); // programID from my.sheerid.com

export default {
  name: 'PageStudentOffer',
  mounted() {
    console.log('stud mounted');
    restartPolling(pid);
    const container = document.getElementById('my-container');
    if (!container) {
      console.log('no container');
      return;
    }
    if (container.children.length > 0) {
      console.log('already loaded');
      return;
    }
    const uuid = getUUID();
    window.sheerId.loadInlineIframe(
        container,
        `${verificationUrl}/${pid}/?cid=${uuid}`,
    );
    console.log('stud iframe loading');
  },
  unmounted() {
    stopPolling();
  },
  setup() {
    const { verified } = poll(pid); 
    const { t } = useI18n();
    let error = ref(null);
    return {
      error,
      t,
      verified,
    };
  },
  components: {
  },
};
