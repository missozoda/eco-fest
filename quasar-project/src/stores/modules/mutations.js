export default {
  setUser(state, user) {
    state.user = user
  },
  setLanguage(state, data) {
    state.language = data
    if (state.user)
      state.user.language = data
  },
  clearUserSession(state, data) {
    state.user = null
  },
  setRoutes(state, routes) {
    let rout_childs = []
    let routes_arr = []
    let app_actions = state.user.app_actions

    routes.forEach(rout => {
      if (!(rout.children == null || rout.children == undefined)) {
        rout.children.forEach(module => {
          if (!(module.meta == null || module.meta == undefined)) {
            if (!(module.meta.action_id == null || module.meta.action_id == undefined)) {
              if (app_actions.includes(module.meta.action_id))
                rout_childs.push(module)
            }
          }
        })
        if (!(rout_childs.length == 0)) {
          routes_arr.push({
            children: rout_childs,
            icon: rout.icon,
            name: rout.name,
            path: rout.path
          })
        }
        rout_childs = []
      }
    })
    state.routes = routes_arr
    // state.user.app_actions = null
  },
  setCurrentRouteName(state, module) {
    state.currentRouteName = module;
  }
}
