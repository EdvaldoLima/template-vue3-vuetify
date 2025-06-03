import type { RouteRecordRaw } from "vue-router";
import { defineAsyncComponent } from "vue";

// Layout
const DefaultLayout = defineAsyncComponent(
  () => import("@/layouts/DefaultLayout.vue"),
);

// View
export const SettingsView = () => import("../SettingsView.vue")

// Middleware
import { redirectMiddleware } from "@/middlewares";

export const settingsRoutes: ReadonlyArray<RouteRecordRaw> = [
  {
    path: '/',
    component: SettingsView,
    meta: {
      layout: DefaultLayout,
      middleware: [redirectMiddleware],
    }
  }
];