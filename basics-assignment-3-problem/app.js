const app = Vue.createApp({
  data() {
    return {
      resultNum: 0,
    };
  },
  computed: {
    finalResult() {
      if (this.resultNum < 37) {
        return "Not there yet";
      } else if (this.resultNum > 37) {
        return "Too much!";
      } else {
        return this.resultNum;
      }
    },
  },
  methods: {
    add(num) {
      this.resultNum = this.resultNum + num;
    },
  },
  watch: {
    finalResult(value) {
      const that = this;
      setTimeout(function () {
        that.resultNum = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
