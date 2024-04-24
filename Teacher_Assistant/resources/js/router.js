import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/login",
        component: () => import("./pages/auth/LoginView.vue"),
    },
    {
        path: "/",
        component: () => import("./pages/home/HomeView.vue"),
    },
    {
        path: "/admin/dashboard",
        component: () => import("./pages/admins/DashboardView.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
