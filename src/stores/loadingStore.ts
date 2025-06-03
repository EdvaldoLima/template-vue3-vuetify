import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
	state() {
		return {
			globalLoading: false,
		};
	},
	getters: {
		getGlobalLoading(): boolean {
			return this.globalLoading;
		},
	},
	actions: {
		setGlobalLoading(status: boolean) {
			this.globalLoading = status;
		},
	},
});
