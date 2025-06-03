
import axios from 'axios';
import { requestLoadingInterceptor, tokenInterceptor } from './interceptors';

const defaultApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
});

requestLoadingInterceptor(defaultApi);
tokenInterceptor(defaultApi);

export default defaultApi;