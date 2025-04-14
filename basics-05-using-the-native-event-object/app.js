const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      //fullName: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        setTimeout(function () {
          this.counter = 0;
        }, 2000);
      }
    },
    /*     name(newvalue, oldvalue) {
      if (newvalue === "") {
        this.fullName = "";
      } else {
        this.fullName = newvalue + " " + this.lastName;
      }
    },
    lastName(newvalue, oldvalue) {
      if (newvalue === "") {
        this.fullName = "";
      } else {
        this.fullName = this.name + " " + newvalue;
      }
    }, */
  },
  computed: {
    fullName() {
      console.log("Running again...");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
});

app.mount("#events");
