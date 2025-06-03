import { type App, computed } from "vue";
import { useLoadingStore } from "@/stores";

export const useGlobals = (app: App) => {
  // Global Loading
	const loadingStore = useLoadingStore();
	app.config.globalProperties.$loading = computed(
		() => loadingStore.getGlobalLoading,
	);
};