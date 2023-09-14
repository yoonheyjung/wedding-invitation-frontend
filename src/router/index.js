import { createRouter, createWebHistory } from "vue-router";

import PublicMain from "../views/PublicMain.vue";
import PrivateMain from "../views/PrivateMain.vue";

const routes = [
  {
    path: "/",
    component: PublicMain,
  },
  {
    path: "/sikhey",
    component: PrivateMain,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
