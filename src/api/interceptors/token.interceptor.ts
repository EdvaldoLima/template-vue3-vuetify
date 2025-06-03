import type { AxiosInstance } from "axios";

export const tokenInterceptor = (api: AxiosInstance) => {
	api.interceptors.request.use(
		(request) => {
			const token = localStorage.getItem("access_token") || null;

			if (token) {
				request.headers["Authorization"] = `Bearer ${token}`;
			}

			return request;
		},
		async (error) => {
			return await Promise.reject(error);
		},
	);

	api.interceptors.response.use(
		(response) => {
			return response;
		},
		async (error) => {
			return await Promise.reject(error);
		},
	);
};

export default tokenInterceptor;
