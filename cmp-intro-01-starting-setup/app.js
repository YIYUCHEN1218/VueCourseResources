const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "Yu",
          name: "ZhangYuShao",
          phone: "1234567890",
          email: "ZhangYuShao@gmail.com.tw",
        },
        {
          id: "01",
          name: "Pardise",
          phone: "0101010101",
          email: "01@gmail.com.tw",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
        <h2>{{detail.name}}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{detail.phone}}</li>
            <li><strong>Email:</strong> {{detail.email}}</li>
        </ul>
    </li>
    `,
  data() {
    return {
      detailsAreVisible: false,
      detail: {
        id: "Yu",
        name: "ZhangYuShao",
        phone: "1234567890",
        email: "ZhangYuShao@gmail.com.tw",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
