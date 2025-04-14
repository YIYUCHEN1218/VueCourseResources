const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      enterName: "",
    };
  },
  methods: {
    confirmedName() {
      this.enterName = this.name;
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter += num;
    },
    minus(num) {
      this.counter -= num;
    },
    submit() {
      alert("Submitted!");
    },
  },
});

app.mount("#events");
