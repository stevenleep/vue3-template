import { Paths } from "@/configs";
import { isAuthorized } from "@/helpers";
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
