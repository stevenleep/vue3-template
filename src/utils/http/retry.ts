import { AxiosInstance } from "axios";
import axiosRetry from "axios-retry";

export function setupAxiosRetry(requestInstance: AxiosInstance) {
  axiosRetry(requestInstance, {
    retries: 3,
    retryDelay: axiosRetry.exponentialDelay,
    shouldResetTimeout: true,
  });
}
