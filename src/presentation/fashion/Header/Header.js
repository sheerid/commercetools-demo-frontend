// import CategoriesMenu from "../CategoriesMenu";
import LoginButton from './LoginButton/LoginButton.vue';
// import LocationSelector from "../LocationSelector/LocationSelector.vue";

import Selector from './Selector/Selector.vue';
import CategoriesMenu from 'presentation/components/CategoriesMenu';
import { useI18n } from 'vue-i18n';
import { computed, ref, shallowRef } from 'vue';
import useSearch from 'hooks/useSearch';
import useLocale from 'hooks/useLocale';
import useLocation from 'hooks/useLocation';
import useCart from 'hooks/useCart';
import useMiniCart from 'hooks/useMinicart';
import sunriseConfig from '../../../../sunrise.config';
import useAccessRules from 'hooks/useAccessRules';
import { useVerification, removeVerification, updateCart } from 'hooks/useVerification';
import getEnv from 'hooks/env';

export default {
  name: 'HeaderPresentation',
  setup() {
    const locale = useLocale();
    const location = useLocation();
    const { cart, exist, refetch } = useCart();
    const { search: s, setSearch } = useSearch();
    const search = shallowRef(s.value);
    const pid = getEnv('VUE_APP_STUDENT_PROGRAM'); // programID from my.sheerid.com
    const { verified, haveDiscount } = useVerification();
    const totalCartItems = computed(() => {
      const cnt = exist.value && cart.value
        ? cart.value.lineItems
            .map(({ quantity }) => quantity)
            .reduce((sum, q) => sum + q, 0)
        : 0;
        console.log('calculating totalCartItems', cnt, haveDiscount.value, verified?.value?.res?.personInfo);
        if (cnt && verified?.value?.res?.personInfo && !haveDiscount.value) {
        console.log('we have cart and verified', verified.res?.personInfo, cnt, pid, cart.value.cartId);
        updateCart(pid, cart.value.cartId);
        setTimeout(() => {
          refetch();
        }, 1000);
      }
      return cnt;
    });
    const removeStatus = () => {
      removeVerification();
    }
    const locations = Object.keys(sunriseConfig.countries);
    const locales = Object.keys(sunriseConfig.languages);
    const miniCart = useMiniCart();

    //@todo: what do we do with this one? Do we have to get this every time?
    const { t } = useI18n();
    const searchOpen = ref(false);
    // const mobileMenuOpen = ref(false);

    const toggleSearch = () => {
      searchOpen.value = !searchOpen.value;
    };
    const doSearch = () => {
      toggleSearch();
      setSearch(search.value);
    };
    const { showStoreSelector, showLocationSelector } =
      useAccessRules();
    return {
      t,
      doSearch,
      toggleSearch,
      removeStatus,
      searchOpen,
      ...locale,
      miniCart,
      locales,
      ...location,
      locations,
      search,
      setSearch,
      totalCartItems,
      showStoreSelector,
      showLocationSelector,
      verified,
      totalShoppingCartItems: 0, //@todo: need this one??
    };
  },
  components: {
    Selector,
    CategoriesMenu,
    LoginButton,
  },
};
