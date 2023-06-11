import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("@/views/portfolio.vue"),
      children: [
        {
          path: "",
          name: "projectlist",
          component: () => import("@/views/projects.vue"),
        },
        {
          path: "/portfolio/:url",
          name: "project",
          component: () => import("@/views/project.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/about.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/contact.vue"),
    },
  ],
});

export default router;
