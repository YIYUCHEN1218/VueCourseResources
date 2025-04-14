const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      /* this.$refs.userInput為HTML元素 擁有整個HTML物件 完全等同於 Javascript中的 document.getElementById 等等方法  */
      console.log(this.$refs.userInput);
      this.message = this.$refs.userInput.value;
    },
  },
});

app.mount("#app");
/* 可同時有複數Vue運作 每個Vue完全獨立 不可共通 */
const app2 = Vue.createApp({
  data() {
    return {
      meal: "Pizza!",
    };
  },
});
app2.mount("#app2");

/* 一個Vue無法對應多個HTML PART */
/* 一個HTML PART 也只能被一個Vue控制 */

/* Vue 在背後做的事情 (使用javascript中的Proxy) */
const data = {
  message: "Hello!",
  longMessage: "Hello! World!",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " World!";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);
proxy.message = "I Am Proxy!!!!";
console.log(proxy.longMessage); // I Am Proxy!!!! World!
