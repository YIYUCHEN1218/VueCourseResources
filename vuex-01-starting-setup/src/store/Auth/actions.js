export default {
  /* 可不用也可用和mutations相同的名字 */
  login(context) {
    context.commit('setAuth', { isAuth: true }); /*  */
  },
  logout(context) {
    context.commit('setAuth', { isAuth: false });
  },
};
