import { createApp } from "vue";
import App from "./App.vue";
import VueKinesis from "vue-kinesis";
import Particles from "vue3-particles";
const app = createApp(App);
app.use(Particles);
app.use(VueKinesis);
app.mount("#app");
