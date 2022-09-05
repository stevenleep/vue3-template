import { CreateMethodDecorator } from "./decorator";
import { requestInstance } from "..";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const GET = CreateMethodDecorator("get", requestInstance);
const POST = CreateMethodDecorator("post", requestInstance);
const PUT = CreateMethodDecorator("put", requestInstance);
const DELETE = CreateMethodDecorator("delete", requestInstance);
const PATCH = CreateMethodDecorator("patch", requestInstance);

export { GET, POST, PUT, DELETE, PATCH };

export type ExtendedAxiosRequestConfig<D = any> = AxiosRequestConfig<D> & Promise<AxiosResponse<D>>;
export type ExtendedAxiosResponse<T = any> = Promise<AxiosResponse<T>>;
