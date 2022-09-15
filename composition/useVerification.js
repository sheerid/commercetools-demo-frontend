import { onMounted, onUnmounted, shallowRef } from 'vue';
import { createReactive } from './lib';
import { SHEERID_URL, VERIFICATION } from '../src/constants';
import fetch from 'isomorphic-fetch';

const verificationStatus = createReactive(
  JSON.parse(localStorage.getItem(VERIFICATION)),
  (newValue) =>
    localStorage.setItem(VERIFICATION, JSON.stringify(newValue))
);

const bridgePoll = (uuid) => {
  const refreshIf = () => {
    console.log(`refreshing for verification status for ${uuid}`);
    fetch(
      `/api/verify?pid=62ff9c5a93ed0c148863989a&cid=${uuid}`,
      {
        headers: {
          authorization: `Basic 62ff9c5a93ed0-c148863989a`,
          'content-type': 'application/json',
        },
        method: 'GET',
      }
    ).then((response) =>
      response.ok
        ? response.json()
        : Promise.reject(response)
    ).then((res) => {
      if (res.programId != '62ff9c5a93ed0c148863989a') {
        console.log('polling again', res);
        setTimeout(refreshIf, 5000);
      } else {
        console.log('student verified');
        verificationStatus.setValue({ res, ...verificationStatus.ref.value });
      }
    }).catch((res) => {
      console.log(res);
    });
  };
  setTimeout(refreshIf, 5000);
}

const useVerification = () => {
  const openVerificationForm = () => {
    const v = verificationStatus.ref.value;
    let uuid = self.crypto.randomUUID();
    if (v.uuid != undefined) {
      uuid = v.uuid;
    } else {
      verificationStatus.setValue({ uuid });
    }
    window.open(SHEERID_URL + `verify/62ff9c5a93ed0c148863989a/?cartid=${uuid}&layout=landing`, '_blank').focus();
    bridgePoll(uuid);
  }

  const verified = shallowRef(verificationStatus.ref.value);
  const setVerified = (v) => verificationStatus.setValue(v);
  const unListen = { fn: () => 88 };
  onMounted(() => {
    unListen.fn = verificationStatus.addListener((newValue) => {
      verified.value = newValue;
    });
  });
  onUnmounted(() => unListen.fn());
  return {
    verified,
    setVerified,
    openVerificationForm
  }
}
export default useVerification;
