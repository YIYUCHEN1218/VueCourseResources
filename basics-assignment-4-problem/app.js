const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      inputClass2: "",
      class1Used: false,
      class2Used: false,
      isShow: true,
    };
  },
  computed: {
    hideClass() {
      if (this.isShow) {
        console.log("Test4");
        return { visible: true };
      } else {
        console.log("Test5");
        return { hidden: true };
      }
    },
    bgClass() {
      return {
        "background-color": this.inputClass,
      };
    },
  },
  watch: {
    inputClass2(value) {
      if (value === "user1") {
        this.class1Used = true;
        this.class2Used = false;
        console.log("Test1");
      } else if (value === "user2") {
        this.class2Used = true;
        this.class1Used = false;
        console.log("Test2");
      }
    },
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
      console.log("Test3");
    },
  },
});

app.mount("#assignment");
