import type { App } from "vue";
import { pinia } from "./pinia";
import { router } from "./vue-router";
import vuetify from "./vuetify";
import './i18n'

export const usePlugins = (app: App) => {
	// Plugins
	app.use(pinia);
  app.use(vuetify);
	app.use(router);
  
	return app;
};
