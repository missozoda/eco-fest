export default {
  getUser(state) {
    return state.user
  },
  getRoutes(state) {
    return state.routes
  },
  getCurrentRouteName(state) {
    return state.currentRouteName;
  }
}
