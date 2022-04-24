import { createApp } from 'vue'
const app = createApp(App);

import App from './App.vue'

import VueCookies from 'vue3-cookies';
import router from "./router";
import store from "./store";

import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

dom.watch();

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
app.component("font-awesome-icon", FontAwesomeIcon);

import {
    create,
    NCarousel,
    NCarouselItem,
} from 'naive-ui';

const naive = create({
    components: [
        NCarousel,
        NCarouselItem,
    ],
});
app.use(naive);

// app.config.globalProperties.emitter = emitter;
app.use(VueCookies, {
    expireTimes: 72*60*60,
});

app.use(router);
app.use(store);

app.mount('#app');
