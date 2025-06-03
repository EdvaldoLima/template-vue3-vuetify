import type { RouteRecordRaw } from "vue-router";

// routes
import { settingsRoutes } from "@/views/SettingsView/routes";


export const routes: ReadonlyArray<RouteRecordRaw> = [
  ...settingsRoutes,
];
