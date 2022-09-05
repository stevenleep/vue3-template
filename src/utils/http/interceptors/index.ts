import { AxiosInstance } from "axios";

import { requestInterceptorErrorImpl, requestInterceptorImpl } from "./request";
import { responseInterceptorErrorImpl, responseInterceptorImpl } from "./response";

export function setupInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(requestInterceptorImpl, requestInterceptorErrorImpl);
  instance.interceptors.response.use(responseInterceptorImpl, responseInterceptorErrorImpl);
}
