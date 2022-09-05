import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from "axios";

type FormatAxiosRequestConfig = (currentRequestConfig: AxiosRequestConfig) => AxiosRequestConfig;

/**
 * @description: 创建特定类型请求装饰器
 *
 * @param method 请求方法
 * @param axiosInstance axios实例
 * @returns 包装后的装饰器(调用返回装饰器)
 */
export function CreateMethodDecorator(method: Method | string, axiosInstance?: AxiosInstance) {
  return function decoratorWrapper<V>(
    url: AxiosRequestConfig["url"],
    formatAxiosRequestConfigFn?: FormatAxiosRequestConfig,
  ): MethodDecorator {
    /**
     * @description: 真正的方法装饰器
     * @param instance 实例对象
     * @param property 方法名
     * @param descriptor 方法描述
     */
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

/**
 *
 * @param decorator 被装饰的方法描述
 * @param method 请求方法
 * @param url 请求地址
 * @param requestInstance 请求实例
 * @param formatAxiosRequestConfigFn 格式化请求配置的函数（可用于更改请求配置）
 */
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
