import { AxiosRequestConfigWithGlobalRequest } from "..";

export default function token(config: AxiosRequestConfigWithGlobalRequest) {
  // TODO: add token logic
  const token = "";
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }
  return config;
}
