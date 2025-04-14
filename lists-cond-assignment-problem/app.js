const app = Vue.createApp({
  data() {
    return {
      inputMessage: "",
      tasks: [],
      isShow: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputMessage);
    },
    switchShow() {
      this.isShow = !this.isShow;
    },
  },
  computed: {
    showText() {
      return this.isShow ? "Hide" : "Show";
    },
  },
});

app.mount("#assignment");
