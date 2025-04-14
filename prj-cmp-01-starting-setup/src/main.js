import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './UI/BaseCard.vue';
import BaseButton from './UI/BaseButton.vue';
import BaseDialog from './UI/BaseDialog.vue';

const application = createApp(App);

application.component('base-card', BaseCard);
application.component('base-button', BaseButton);
application.component('base-dialog', BaseDialog);

application.mount('#app');
