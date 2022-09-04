import { GET, ExtendedAxiosRequestConfig, POST } from "@/utils/http/decorators";

export class UserDomain {
  @GET("/api/mock-test")
  getUser() {} // 当不做任何处理时使用默认的response作为函数返回值

  @POST("/api/mock-test")
  async postUser(responseOrParams?: ExtendedAxiosRequestConfig) {
    return (await responseOrParams)?.data; // 当函数具备返回值时，使用函数返回值作为response
  }

  // 测试使用参数定制
  @GET("/api/mock-test", (axiosRequestConfig) => {
    axiosRequestConfig.headers = {
      customHeader: "customHeader",
    };
    return axiosRequestConfig;
  })
  async getUserWithParams(responseOrParams?: ExtendedAxiosRequestConfig) {
    const res = await responseOrParams;
    console.log("responseOrParams -->", res?.config.headers?.customHeader);
    return res?.data;
  }
}
