import * as VueRouter from "vue-router";
import { routes } from "@/routes";
import { useMiddleware } from "@/routes/useMiddleware.ts";

export const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	useMiddleware(to, from, next, router);
});
