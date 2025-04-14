import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./component/FriendContact.vue";
import NewFriend from "./component/NewFriend.vue";
const application = createApp(App);
application.component("friend-contact", FriendContact);
application.component("new-friend", NewFriend);
application.mount("#app");
