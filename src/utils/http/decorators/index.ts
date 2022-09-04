import { CreateMethodDecorator } from "./decorator";
import { axiosInstance } from "..";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const GET = CreateMethodDecorator("get", axiosInstance);
const POST = CreateMethodDecorator("post", axiosInstance);
const PUT = CreateMethodDecorator("put", axiosInstance);
const DELETE = CreateMethodDecorator("delete", axiosInstance);
const PATCH = CreateMethodDecorator("patch", axiosInstance);

export { GET, POST, PUT, DELETE, PATCH };

export type ExtendedAxiosRequestConfig<D = any> = AxiosRequestConfig<D> & Promise<AxiosResponse<D>>;
export type ExtendedAxiosResponse<T = any> = Promise<AxiosResponse<T>>;
