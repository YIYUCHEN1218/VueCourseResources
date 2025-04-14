const app = Vue.createApp({
  data() {
    return {
      name: "Aaron",
      age: 27,
      imageUrl:
        "https://img.lovepik.com/free-png/20210919/lovepik-cute-pig-image-png-image_400807463_wh1200.png",
    };
  },
  methods: {
    createRandomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
