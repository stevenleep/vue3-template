import { AxiosInstance, AxiosResponse } from "axios";
import { AxiosRequestConfigWithGlobalRequest } from "..";
import requestFlow from "./request";
import { checkStatusCode, promptError } from "./response";

export function setupInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(function requestInterceptor(config) {
    requestFlow(config as AxiosRequestConfigWithGlobalRequest);
    return config;
  }, requestErrorWarper);

  instance.interceptors.response.use<AxiosResponse>(function responseInterceptor(
    response: AxiosResponse,
  ) {
    return new Promise((resolve, reject) => {
      // check status code
      // status code is not 200-300 will be treated as an error and reject
      const { status, message, code } = checkStatusCode(response);
      if (status) resolve(response);

      // XXX: should we prompt error message here?
      reject(response);
      promptError(code, message);
    });
  },
  requestErrorWarper);
}

function requestErrorWarper(error: any) {
  return Promise.reject(error);
}
