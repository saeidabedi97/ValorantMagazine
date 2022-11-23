import { createRouter, createWebHistory } from "vue-router";
const HomePage = () => import("../views/HomePage.vue");
const AgentsPage = () => import("../views/AgentsPage.vue");
const AgentsDetails = () => import("../views/AgentsDetails.vue");
const MapsPage = () => import("../views/MapsPage.vue");

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
