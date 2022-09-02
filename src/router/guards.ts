import { Paths } from "@/config";
import { isAuthorized } from "@/utils";
import { router } from ".";
import { isLoginPath } from "./util";

// TODO: Push the error to monitor system
router.onError((error) => {
  console.log(error);
});

// beforeEach
router.beforeEach((to, from, next) => {
  if (!isLoginPath(to) || !isAuthorized()) {
    next({ path: Paths.Login });
  } else {
    next();
  }
});
