import token from "./token";
import header from "./header";
import { flow } from "@/utils/actuator";
import { AxiosRequestConfigWithGlobalRequest } from "..";

const runDefinitionFlow = flow(header, token);

export default function requestFlow(config: AxiosRequestConfigWithGlobalRequest) {
  return runDefinitionFlow<AxiosRequestConfigWithGlobalRequest>(config);
}
