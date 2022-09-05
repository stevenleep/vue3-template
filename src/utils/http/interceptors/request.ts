import { AxiosRequestConfig } from "axios";

export function requestInterceptorImpl(config: AxiosRequestConfig) {
  return config;
}

export function requestInterceptorErrorImpl(error: any) {
  return Promise.reject(error);
}
