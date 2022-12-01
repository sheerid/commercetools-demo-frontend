import { required, numeric } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

import { shallowRef, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import BaseForm from 'presentation/components/BaseForm/BaseForm.vue';
import BaseInput from 'presentation/components/BaseInput/BaseInput.vue';
import ServerError from 'presentation/components/ServerError/ServerError.vue';
import useCartTools from 'hooks/useCartTools';
import { useVerification } from 'hooks/useVerification';

function Rules() {
  this.quantity = { required, numeric };
}

export default {
  name: 'AddToCartForm',
  props: {
    sku: {
      type: String,
      required: true,
    },
    isOnStock: {
      type: Boolean,
      required: true,
    },
    availableQuantity: {
      type: Number,
      required: false,
    },
    addCaption: {
      type: String,
      default: 'addToCart',
    },
  },
  components: {
    BaseForm,
    ServerError,
    BaseInput,
  },
  setup(props) {
    const { t } = useI18n();
    const form = ref({ quantity: 1 });
    const rules = new Rules(form);
    const v = useVuelidate(rules, form);
    const showQuantityError = shallowRef(false);
    const { addLine } = useCartTools();
    const { updateCart, verified } = useVerification();
    const addLineItem = async () => {
      const updated = await addLine(props.sku, Number(form.value.quantity));
      if (verified && !verified.cartid) {
        console.log('cart:',updated.data.updateMyCart.id);
        updateCart(updated.data.updateMyCart.id);
      }
    }
    return { t, addLineItem, v, showQuantityError };
  },
};
