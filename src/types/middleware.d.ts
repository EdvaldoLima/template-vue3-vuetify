export type Context = {
	to: RouteLocationNormalized;
	from: RouteLocationNormalized;
	next: () => void;
	router: Router;
};
