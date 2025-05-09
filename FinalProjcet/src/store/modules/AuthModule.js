let timer;

export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
      autoLogout: false,
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    token(state) {
      return state.token;
    },
    isAuthenticated(state) {
      return !!state.token;
    },
    autoLogout(state) {
      return state.autoLogout;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
      state.autoLogout = false;
    },
    setAutoLogout(state) {
      state.autoLogout = true;
    },
  },
  actions: {
    async login(context, payload) {
      context.dispatch("auth", {
        ...payload,
        mode: "login",
      });
    },
    async signup(context, payload) {
      context.dispatch("auth", {
        ...payload,
        mode: "signup",
      });
    },
    async auth(context, payload) {
      const mode = payload.mode;
      let url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBrq9UTaLu_3iucs3PSuewyL_S-QTYoFr0";
      if (mode === "signup") {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBrq9UTaLu_3iucs3PSuewyL_S-QTYoFr0";
      }

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      });

      const responseData = await response.json();
      console.log(responseData);

      if (!response.ok) {
        const error = new Error(responseData.message || "Failed to authenticate.");
        throw error;
      }
      const expiresIn = +responseData.expiresIn * 1000;
      /* const expiresIn = 5000; */
      const expirationDate = new Date().getTime() + expiresIn;
      const user = {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: expirationDate,
      };
      localStorage.setItem("user", JSON.stringify(user));

      timer = setTimeout(function () {
        context.dispatch("autoLogout");
      }, expiresIn);

      context.commit("setUser", user);
    },
    tryLogin(context) {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user) {
        const expiresIn = +user.tokenExpiration - new Date().getTime();
        if (expiresIn < 0) {
          return;
        } else {
          timer = setTimeout(function () {
            context.dispatch("autoLogout");
          }, expiresIn);
          context.commit("setUser", { ...user });
        }
      }
    },
    logout(context) {
      localStorage.removeItem("user");
      clearTimeout(timer);
      context.commit("setUser", {
        token: null,
        userId: null,
        tokenExpiration: null,
      });
    },
    autoLogout(context) {
      context.dispatch("logout");
      context.commit("setAutoLogout");
    },
  },
};
