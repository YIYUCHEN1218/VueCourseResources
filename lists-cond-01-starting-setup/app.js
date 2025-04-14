const app = Vue.createApp({
  data() {
    return {
      inputText: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      if (this.inputText !== "") this.goals.push(this.inputText);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
