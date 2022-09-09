import { AxiosResponse } from "axios";
import { StatusCodeMap } from "./settings";

export function checkStatusCode(response: AxiosResponse): {
  code: number;
  message: string;
  status: boolean;
} {
  const { status } = response;
  const message = StatusCodeMap[status] || "Unknown Error";
  //  The default considers 200-300 is a successful request
  if (status >= 200 && status < 300) {
    return { code: status, message, status: true };
  }
  return { code: status, message, status: false };
}

export function promptError(code: number, message: string) {
  console.log("Error", code, message);
}
