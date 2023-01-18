import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      polling: false,
      uuid: self.crypto.randomUUID(),
    }
  },
  mutations: {
    setPolling (state, value) {
      state.polling = value
    },
    setUUID (state, value) {
      state.uuid = value
    }
  }
})
