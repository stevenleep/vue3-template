import { getEnv } from "@/utils";
import axios from "axios";

// XXX: 临时解决方案
export function createHttpService(currentRuntimeBaseURL: string) {
  return axios.create({
    baseURL: getEnv(currentRuntimeBaseURL),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
