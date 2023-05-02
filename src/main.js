import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import VueKinesis from "vue-kinesis";
import Particles from "vue3-particles";
import VueAnimateOnScroll from "vue3-animate-onscroll";
import VueObserveVisibility from "vue-observe-visibility";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(Particles);
app.use(VueKinesis);
app.use(VueAnimateOnScroll);
app.use(VueObserveVisibility);
app.mount("#app");
