import { defaultApi } from '@/api';

export const fetchSettings = async () => {
  return await defaultApi.get('/v1/settings');
}