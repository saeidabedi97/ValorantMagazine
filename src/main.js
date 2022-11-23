import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes";
import { TroisJSVuePlugin } from "troisjs";
import { library } from "@fortawesome/fontawesome-svg-core";
import Carousel3d from "vue3-carousel-3d";
import "vue3-carousel-3d/dist/index.css";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUsers,
  faMapLocationDot,
  faGun,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUsers, faMapLocationDot, faGun);

createApp(App)
  .use(router)
  .use(TroisJSVuePlugin)
  .use(Carousel3d)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
