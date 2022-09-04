import { reactive } from "vue";
import { EpPropMergeType } from "element-plus/es/utils/vue/props/types";

export * from "./loginModel";
import { OptionalFields } from "./loginModel";

type ModelValueType = EpPropMergeType<
  | (new (...args: any[]) => (string | number | null | undefined) & {})
  | (() => string | number | null | undefined)
  | (
      | (new (...args: any[]) => (string | number | null | undefined) & {})
      | (() => string | number | null | undefined)
    )[],
  unknown,
  unknown
>;

const initialState: Record<OptionalFields, ModelValueType> = {
  username: "",
  password: "",
  confirmPassword: "",
};
export const loginModel = reactive(initialState);

export function getFormItemValue(field: OptionalFields): ModelValueType {
  return loginModel[field];
}
