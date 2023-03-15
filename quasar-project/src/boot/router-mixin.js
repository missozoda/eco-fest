import {boot} from 'quasar/wrappers'


export default boot(({router, store}) => {

  router.beforeEach((to, from, next) => {
    if (to.meta.action_id || to.meta.action_id == 0) {
      let action = to.meta.action_id
      if (to.meta.action_id === -1) {
        next()
      } else {
        let user = store.getters.getUser
        if (!user || Object.keys(user).length === 0) {
          router.back()
        } else {
          let actions = user.app_actions
          if (actions.includes(action)) {
            next()
          } else {
            router.back()
          }
        }
      }
    } else {
      router.push('/')
    }
  })
})
