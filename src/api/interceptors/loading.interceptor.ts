import { useLoadingStore } from "@/stores";
import type { AxiosInstance } from "axios";

const delayLoading = 500;

const setGlobalLoading = () => {
  useLoadingStore().setGlobalLoading(true);
};

const removeGlobalLoading = () => {
  setTimeout(() => {
    useLoadingStore().setGlobalLoading(false);
  }, delayLoading);
};


export const requestLoadingInterceptor = (api: AxiosInstance) => {
  api.interceptors.request.use(
    (request) => {
      setGlobalLoading()
      return request;
    },
    async (error) => {
      removeGlobalLoading();
      return await Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    (response) => {
      removeGlobalLoading();
      return response;
    },
    async (error) => {
      removeGlobalLoading();
      return await Promise.reject(error);
    },
  );
};

export default requestLoadingInterceptor;
