import type { ComputedRef } from "vue";

declare module "*.vue" {
	import type { DefineComponent } from "vue";
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const component: DefineComponent<object, object, any>;
	export default component;
}

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$loading: ComputedRef;
	}
}