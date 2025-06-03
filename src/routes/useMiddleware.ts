//@ts-nocheck
import type { Context } from "@/types/middleware";
import type { RouteLocationNormalized, Router } from "vue-router";

function nextFactory(
	context: Context,
	middleware: Array<Function>,
	index: number,
) {
	const subsequentMiddleware = middleware[index];
	if (!subsequentMiddleware) return context.next;

	return (...parameters: any) => {
		context.next(...parameters);
		const nextMiddleware = nextFactory(context, middleware, index + 1);
		subsequentMiddleware({ ...context, next: nextMiddleware });
	};
}

export const useMiddleware = (
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: () => void,
	router: Router,
) => {
	if (to.meta.middleware) {
		const middleware = to.meta.middleware as Array<Function>;

		const context = {
			to,
			from,
			next,
			router,
		};
		const nextMiddleware = nextFactory(context, middleware, 1);

		return middleware[0]({ ...context, next: nextMiddleware });
	}

	return next();
};
