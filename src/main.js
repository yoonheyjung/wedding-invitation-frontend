import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Countdown from "vue3-flip-countdown";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret);
const app = createApp(App);
app.mount("#app");
app.use(Countdown);
app.component("font-awesome-icon", FontAwesomeIcon);
