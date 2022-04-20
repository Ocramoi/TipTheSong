import { createApp } from 'vue'
import App from './App.vue'

import VueCookies from 'vue3-cookies';
import router from "./router";
import store from "./store";

const app = createApp(App);
// app.config.globalProperties.emitter = emitter;
app.use(VueCookies, {
    expireTimes: 72*60*60,
    //secure: true //? habilitar quando site estiver no ar em com HTTPS
});

app.use(router);
app.use(store);

app.mount('#app');
