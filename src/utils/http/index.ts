import axios from "axios";
import { getEnv } from "@/utils";
import settings from "@/config/settings";
import { getContentType } from "./ContentType";
import { setupInterceptors } from "./interceptors";

/**
 * @title About the source of BASE_URL？
 *
 * @description
 *
 * specific BASE_URL value points to .env.development || .env.production file VITE_BASE_SERVER_URL field
 * in gitlab-ci, system will specify different BASE_URL according to different environment variables
 *
 *
 * How to set environment variables in ViteApp?
 *
 * please view the official documentation of the environment variable：
 * ref: https://cn.vitejs.dev/guide/env-and-mode.html#env-variables-and-modes
 *
 * @return string
 */
const BASE_URL = getEnv("VITE_BASE_SERVER_URL");
export const requestInstance = axios.create({
  baseURL: BASE_URL,

  /**
   * you can configure the global request timeout in config/settings.ts
   * default timeout: 10 seconds
   */
  timeout: settings?.http?.timeout || 10000,

  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: true,

  // default response type
  responseType: "json",

  // validateStatus(status) {
  //   return status >= 200 && status < 300;
  // },

  headers: {
    "Content-Type": getContentType("JSON"),
  },

  decompress: true,
});

setupInterceptors(requestInstance);
