import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './index.css';

let app;

app = createApp(App);

app.use(router);

app.mount('#app');
