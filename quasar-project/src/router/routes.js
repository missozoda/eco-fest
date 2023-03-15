const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "home", name:"HomePage", component: () => import("pages/IndexPage.vue") },
      {
        path: "energy",
        name: "EnergyPage",
        component: () => import("pages/EnergyPage.vue"),
        meta: {
          action_id: 1,
          icon: "mdi-sprout",
          title: "Energiya va atrof-muhit",
          description: "Energiya va atrof-muhit",
        },
      },
      {
        path: "climate",
        name: "ClimatePage",
        component: () => import("pages/ClimatePage.vue"),
        meta: {
          action_id: 2,
          icon: "mdi-file-table-box-multiple",
          title: "Iqlim va ob-havo",
          description: "Iqlim va ob-havo",
        },
      },
      {
        path: "forestry",
        name: "ForestryPage",
        component: () => import("pages/ForestryPage.vue"),
        meta: {
          action_id: 3,
          icon: "mdi-file-table-box-multiple",
          title: "Qishloq va oʻrmon xoʻjaligi",
          description: "Qishloq va oʻrmon xoʻjaligi",
        },
      },
      {
        path: "economy",
        name: "EconomyPage",
        component: () => import("pages/EconomyPage.vue"),
        meta: {
          action_id: 4,
          icon: "mdi-file-table-box-multiple",
          title: "Iqtisodiyot va moliya",
          description: "Iqtisodiyot va moliya",
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
