import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';
import router from './router';
import store from './store';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

//app.prototype.$axios = axios;

export const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.axios = axios;
app.use(store).use(router).mount('#app');

export const HOST = 'http://sslo.ai:8859';
// 'http://210.113.122.196:8825';

// createApp(App).use(store).use(router).mount('#app');
//const emitter = mitt();
// const app = createApp(App);
// app.config.globalProperties.$axios = axios;
// app.config.globalProperties.emitter = emitter;
// app.use(store).use(router).mount('#app');
