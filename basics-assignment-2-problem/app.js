const app = Vue.createApp({
  data() {
    return {
      alertMessage: "You got it",
      outputMessage: "default",
      outputMessage2: "default",
    };
  },
  methods: {
    showAlert() {
      alert(this.alertMessage);
    },
    updateInput(event) {
      this.outputMessage = event.target.value;
    },
    updateInput2(event) {
      this.outputMessage2 = event.target.value;
    },
  },
});

app.mount("#assignment");
