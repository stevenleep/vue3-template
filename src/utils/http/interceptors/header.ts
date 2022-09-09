import { AxiosRequestConfigWithGlobalRequest } from "..";
import { getContentType } from "../ContentType";

export default function header(config: AxiosRequestConfigWithGlobalRequest) {
  /**
   * @title When uploading of form and files, use different Content-Type
   */
  if (config.requestType) {
    config.headers["Content-Type"] = getContentType(config.requestType);
  }

  return config;
}
