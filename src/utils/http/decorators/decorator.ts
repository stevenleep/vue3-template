import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from "axios";

type FormatAxiosRequestConfig = (currentRequestConfig: AxiosRequestConfig) => AxiosRequestConfig;

export function CreateMethodDecorator(method: Method | string, axiosInstance?: AxiosInstance) {
  return function decoratorWrapper<V>(
    url: AxiosRequestConfig["url"],
    formatAxiosRequestConfigFn?: FormatAxiosRequestConfig,
  ): MethodDecorator {
    return function methodDecorator<T>(
      instance: Object,
      property: string | symbol,
      decorator: TypedPropertyDescriptor<T>,
    ): TypedPropertyDescriptor<T> | void {
      return rewriteDecoratorMethod<T, V>(
        decorator,
        method,
        url,
        axiosInstance,
        formatAxiosRequestConfigFn,
      );
    };
  };
}

function rewriteDecoratorMethod<T, V>(
  decorator: TypedPropertyDescriptor<T>,
  method: Method | string,
  url: AxiosRequestConfig["url"],
  requestInstance?: AxiosInstance,
  formatAxiosRequestConfigFn?: FormatAxiosRequestConfig,
) {
  // origin method
  const originalMethod = decorator.value;

  if (originalMethod && typeof originalMethod === "function") {
    decorator.value = function <T = any, R = AxiosResponse<T>, D = any>(
      requestConfig: AxiosRequestConfig<D> = {},
    ) {
      const instance = safeAxiosInstance(requestInstance);

      let newestRequestConfig = requestConfig;

      if (formatAxiosRequestConfigFn && typeof formatAxiosRequestConfigFn === "function") {
        newestRequestConfig = formatAxiosRequestConfigFn({ url, method, ...requestConfig });
      }

      // 使用外部的Axios发送请求，可使用外部拦截器进行拦截
      const response = instance.request<T, R, D>({
        url: newestRequestConfig.url || url,
        method: newestRequestConfig.method || method,
        ...newestRequestConfig,
      });

      // 将响应值返回到原始的函数参数中
      const originResponse = originalMethod.call(requestInstance, response) as V;

      // 使用外部重组的数据
      if (originResponse) {
        return originResponse;
      }

      return response;
    } as T;
  }
}

function safeAxiosInstance(axiosInstance?: AxiosInstance): AxiosInstance {
  if (axiosInstance) {
    return axiosInstance;
  }
  return axios.create();
}
