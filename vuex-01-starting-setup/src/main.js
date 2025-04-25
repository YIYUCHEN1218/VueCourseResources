import { createApp } from 'vue';
import store from './store/Auth/index.js';
import App from './App.vue';

const app = createApp(App);
/* store 中本來應該儲存root的module Auth資料中存的是獨立的module 反過來 但不影響功能 */
/* 僅為表示兩種寫法都可以 */
app.use(store);
app.mount('#app');
