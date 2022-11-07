# http method decorators
Using decorators for request methods in axios

## Create
```ts
// index.ts
import { CreateMethodDecorator } from "./decorator";
// An axios Instance is automatically created internally
export const GET = CreateMethodDecorator("get");
```

or

```ts
// index.ts
impoprt axios from "axios";
import { CreateMethodDecorator } from "./decorator";

const axiosInstance = axios.create({});

export const GET = CreateMethodDecorator("get", axiosInstance);
```

## Usage
```ts
import { GET } from "./index.ts";

class UserService {
  @GET("/user-info")
  public getUserInfo(response) {} // No value can be reversed
  
  @GET("/xxx", (axiosRequestConfig) => {
    // do something
    return axiosRequestConfig
  })
  public getXXX(response) {
    // do something
    
    return response;
  }
}
```
