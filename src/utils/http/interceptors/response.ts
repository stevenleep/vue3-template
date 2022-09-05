import { AxiosResponse } from "axios";

export function responseInterceptorImpl(response: AxiosResponse) {
  return response;
}

export function responseInterceptorErrorImpl(error: any) {
  return Promise.reject(error);
}
