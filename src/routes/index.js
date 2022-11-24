import { createRouter, createWebHistory } from "vue-router";
const HomePage = () => import("../views/HomePage.vue");
const AgentsPage = () => import("../views/AgentsPage.vue");
const AgentsDetails = () => import("../views/AgentsDetails.vue");
const MapsPage = () => import("../views/MapsPage.vue");
const WeaponsPage = () => import("../views/WeaponsPage.vue");
const WeaponsDetails = () => import("../views/WeaponDetails.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/agents",
    name: "AgentsPage",
    component: AgentsPage,
    children: [
      {
        path: "/agentDetails/:agentName",
        props: true,
        name: "AgentDetails",
        component: AgentsDetails,
      },
    ],
  },
  {
    path: "/maps",
    name: "MapsPage",
    component: MapsPage,
  },
  {
    path: "/weapons",
    name: "weapons",
    component: WeaponsPage,
    children: [
      {
        path: "/weaponDetails/:weaponName",
        props: true,
        name: "weaponDetails",
        component: WeaponsDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
