import { createApp } from "vue";

/* import App from "./App.vue"; */
import App2 from "./App2.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BaseCard from "./components/BaseCard.vue";

const app = createApp(App2);

app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);

app.mount("#app");
