import {store} from 'quasar/wrappers'
import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";
import SecureLS from 'secure-ls'

const ls = new SecureLS({isCompression: false});

import mutations from "src/store/modules/mutations";
import state from "src/store/modules/state";
import getters from "src/store/modules/getters";
import actions from "src/store/modules/actions";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,

    plugins: [
      createPersistedState({
        storage: {
          getItem: key => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: key => ls.remove(key)
        }
      })],


    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
