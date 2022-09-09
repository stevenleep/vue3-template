import { CreateMethodDecorator } from "./decorator";
import { AxiosRequestConfigWithGlobalRequest, requestInstance } from "..";
import { AxiosResponse } from "axios";

const GET = CreateMethodDecorator("get", requestInstance);
const POST = CreateMethodDecorator("post", requestInstance);
const PUT = CreateMethodDecorator("put", requestInstance);
const DELETE = CreateMethodDecorator("delete", requestInstance);
const PATCH = CreateMethodDecorator("patch", requestInstance);

export { GET, POST, PUT, DELETE, PATCH };

export type ExtendedAxiosRequestConfig<D = any, V = any> =
  | AxiosRequestConfigWithGlobalRequest<D>
  | Promise<AxiosResponse<V, D>>;
export type ExtendedAxiosResponse<T = any> = Promise<AxiosResponse<T>>;
