<div class="custom-container">
    <div class="header-top pt-10 pb-10">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <div class="header-info header-info-inc">
            <router-link
              :to="{ name: 'stores' }"
              data-test="stores-link"
              v-if="showStoreSelector"
            >
              {{ t('stores') }}
            </router-link>
            <a href="#">{{ t('help') }}</a>
          </div>
        </div>
        <div
          class="col-sm-6 d-flex justify-content-end"
        >
          <div class="curr-lang-wrap curr-lang-inc">
            <ul>
              <Selector
                data-test="country-selector-dropdown"
                v-if="showLocationSelector"
                :values="locations"
                title="location"
                :value="location"
                :setValue="setLocation"
              />
              <Selector
                data-test="language-selector-dropdown"
                :values="locales"
                title="language"
                :value="locale"
                :setValue="setLocale"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
