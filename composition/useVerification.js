import { onMounted, onUnmounted, shallowRef, ref } from 'vue';
import { createReactive } from './lib';
import { SHEERID_URL, VERIFICATION } from '../src/constants';
import fetch from 'isomorphic-fetch';

const verificationStatus = createReactive(
  JSON.parse(localStorage.getItem(VERIFICATION)),
  (newValue) =>
    localStorage.setItem(VERIFICATION, JSON.stringify(newValue))
);

const uuid = ref(self.crypto.randomUUID());
const polling = ref(false);
const verifiedMessage = ref("");
const haveDiscount = ref(false);

const pollBridgeServer = (pid) => {
  const refreshIf = () => {
    if (!polling.value) {
      console.log('stopping polling, we are done');
      return;
    }

    if (verificationStatus.ref.value?.res?.personInfo) {
      console.log('verified already', verificationStatus.ref.value?.res);
      // nothing to do
      return
    }
    console.log(`refreshing for verification status for ${uuid.value}`, verificationStatus.ref?.value?.res);
    fetch(`/api/verify?pid=${pid}&cid=${uuid.value}`).then((response) =>
      response.ok
        ? response.json()
        : Promise.reject(response)
    ).then((res) => {
      if (!res?.personInfo) {
        console.log(`polling again`, JSON.stringify(res));
        setTimeout(refreshIf, 2000);
      } else {
        console.log('successfully verified', JSON.stringify(res));
        verificationStatus.setValue({ res, ...verificationStatus.ref.value });
        window.scrollTo(0,0);
      }
    }).catch((res) => {
      console.log(res);
    });
  };
  setTimeout(refreshIf, 2000);
}

const poll = (pid) => {
  console.log('starting polling with poll');
  restartPolling(pid);
  if (!verificationStatus.ref?.value?.res) {
    pollBridgeServer(pid);
  }
  const verified = shallowRef(verificationStatus.ref?.value);
  return {
    verified,
    haveDiscount,
  }
}

const stopPolling = () => {
  polling.value = false;
}

const useVerification = (pid) => {
  const openVerificationForm = () => {
    console.log('starting polling with open form');
    const v = verificationStatus.ref.value;
    if (v?.uuid != undefined) {
      uuid.value = v.uuid;
    } else {
      if (uuid.value != undefined) {
        verificationStatus.setValue({ uuid: uuid.value });
      }
    }
    window.open(SHEERID_URL + `verify/${pid}/?cid=${uuid.value}&layout=landing`, '_blank').focus();
    restartPolling(pid);
    pollBridgeServer(pid);
  }
  const verified = shallowRef(verificationStatus.ref?.value);
  const setVerified = (v) => verificationStatus.setValue(v);
  const unListen = { fn: () => 88 };
  onMounted(() => {
    unListen.fn = verificationStatus.addListener((newValue) => {
      verified.value = newValue;
    });
  });
  onUnmounted(() => {
    unListen.fn();
    stopPolling();
  });
  return {
    uuid,
    verified,
    haveDiscount,
    setVerified,
    openVerificationForm
  }
}

const updateCart = (pid, cartId) => {
  if (cartId != null && uuid.value) {
    console.log(`having cart, sending it to bridge ${cartId}`);
    fetch(`/api/update?pid=${pid}&cid=${uuid.value}&cart=${cartId}`).then((response) =>
      response.ok
        ? response.json()
        : Promise.reject(response)
    ).then((res) => {
      console.log(res);
      verificationStatus.setValue({...verificationStatus.ref?.value, cartid: cartId});
      haveDiscount.value = true;
    }).catch((res) => {
      console.log(res);
    });  
  }
}

const removeVerification = () => {
  verificationStatus.setValue(null);
  localStorage.removeItem(VERIFICATION);
  uuid.value = self.crypto.randomUUID();
}

const restartPolling = (pid) => {
  console.log('restarting polling in 1s', polling.value, pid, verificationStatus.ref?.value?.res)
  setTimeout(() => {
    if (polling.value) {
      console.log('already polling');
      return;
    }
    polling.value = true;
    pollBridgeServer(pid);
  }, 1000);
}

const getUUID = () => uuid.value;

const getVerifiedMessage = () => verifiedMessage.value;
const setVerifiedMessage = (msg) => verifiedMessage.value = msg;

export { useVerification, updateCart, poll, restartPolling, stopPolling, removeVerification, getUUID, getVerifiedMessage, setVerifiedMessage };
