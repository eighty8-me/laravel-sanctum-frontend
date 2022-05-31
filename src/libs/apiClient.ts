import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';

import { API_ENDPOINT_BASE, CONTENT_TYPE } from '@/libs/constants';

export type ApiClientOption = {
  isAuth?: boolean;
};

type Header = {
  'content-type': string;
};

type ApiClient = AxiosInstance;
export type ApiClientResponse<T> = AxiosResponse<T>;
export type ApiClientError<T> = AxiosError<T>;

export const createApiClient = (options: ApiClientOption = {}): ApiClient => {
  const headers: Header = {
    'content-type': CONTENT_TYPE,
  };

  if (options.isAuth) {
    // headers['app-authid'] = getSSId();
  }

  let endpoint = API_ENDPOINT_BASE;
  if (process.env.NODE_ENV === 'production') {
    endpoint = API_ENDPOINT_BASE;
  }

  const instance = axios.create({
    baseURL: endpoint,
    headers,
    withCredentials: true,
    responseType: 'json',
  });

  return instance;
};
