import type { Context } from "@/types/middleware";

export default function redirectMiddleware({ next }: Context) {
  console.log("Redirect Middleware Triggered");
	return next();
}
