import { getElementTextContent, isSelectableElement } from "@/helpers";
import { Ref } from "vue";

// export interface SelectionOptions {
//   onlyText?: boolean; // default: true
// }
export function useSelection<SE extends HTMLElement = HTMLElement>(
  ref: Ref<SE>,
  //   options?: SelectionOptions,
): string {
  const element = ref.value;
  if (!element) {
    throw new Error("Element is not defined");
  }

  let clipboardText = "";

  if (isSelectableElement(element)) {
    element.select();
    element.setSelectionRange(0, element.value.length);

    clipboardText = element.value;
  } else {
    clipboardText = getElementTextContent(element).toString();
    // TODO: 应该使用insertAPI将内容设置到 Selection Text
  }

  return clipboardText;
}
