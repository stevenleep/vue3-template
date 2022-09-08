import { createDirective } from "../createDirective";

export default createDirective("lazy", {
  mounted(el, binding) {
    console.log("mounted", el, binding);
  },
});
