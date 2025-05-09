export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: "c1",
          firstName: "Maximilian",
          lastName: "Schwarzmüller",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "Jones",
          areas: ["frontend", "career"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations: {
    registerCoach(state, payload) {
      state.coaches.push(payload);
    },
    setCoaches(state, payload) {
      state.coaches = payload;
    },
    setFetchTimestap(state) {
      state.lastFetch = new Date().getTime();
    },
  },
  actions: {
    async registerCoach(context, data) {
      const userId = context.rootGetters.userId;
      const coachData = {
        firstName: data.first,
        lastName: data.last,
        areas: data.areas,
        description: data.desc,
        hourlyRate: data.rate,
      };
      const token = context.rootGetters.token;
      const response = await fetch(
        `https://vue-http-demo-265f3-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${token}`,
        {
          method: "PUT",
          body: JSON.stringify(coachData),
        }
      );

      /* const responseData = await response.json(); */
      if (!response.ok) {
        /* Error */
      }

      context.commit("registerCoach", { ...coachData, id: userId });
    },
    async loadCoaches(context, payload) {
      if (!payload.forceRefresh && !context.getters.shouldUpdate) return;

      const response = await fetch(`https://vue-http-demo-265f3-default-rtdb.firebaseio.com/coaches.json`, {
        method: "GET",
      });

      const responseData = await response.json();

      if (!response.ok) {
        /* Error */
        const error = new Error(responseData.message || "Failed to fetch!");
        throw error;
      }
      const coaches = [];
      for (const key in responseData) {
        const coach = {
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          areas: responseData[key].areas,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
        };
        coaches.push(coach);
      }

      context.commit("setCoaches", coaches);
      context.commit("setFetchTimestap");
    },
  },
  getters: {
    coaches(state) {
      return state.coaches;
    },
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
    isCoach(state, getters, rootState, rootGetters) {
      const coaches = getters.coaches;
      const userId = rootGetters.userId;
      return coaches.some((coach) => coach.id === userId);
    },
    shouldUpdate(state) {
      const lastFetch = state.lastFetch;
      if (!lastFetch) return true;

      const currentTimeStamp = new Date().getTime();
      return (currentTimeStamp - lastFetch) / 1000 > 60;
    },
  },
};
