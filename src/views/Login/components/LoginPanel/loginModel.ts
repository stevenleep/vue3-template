import { reactive } from "vue";
import { FormRules } from "element-plus";

type ConvertStringConstructor<O> = {
  [K in keyof O]: O[K] extends StringConstructor ? string : O[K];
};

// union type of all optional fields
// Type inference: username | password | confirmPassword
export type OptionalFields = typeof loginSchema[number]["field"];
export type FieldItemKeys = keyof typeof loginSchema[number];

type FieldItemConstructor = ConvertStringConstructor<typeof loginSchema[number]>;
export type FieldItem = Omit<FieldItemConstructor, "field"> & {
  readonly field: OptionalFields;
};

export const loginSchema = [
  {
    field: "username",
    type: "text",
    label: "Username",
    layout: {},
    placeholder: "placeholder.username.placeholder",
  },
  {
    field: "password",
    type: "password", // custom type for validation
    label: "Password",
    layout: {},
    placeholder: "placeholder.password.placeholder",
  },
  {
    field: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    layout: {},
    placeholder: "placeholder.confirmPassword.placeholder",
  },
] as const;

// https://github.com/yiminghe/async-validator
export const loginRuleSchema: FormRules = {
  username: {
    required: true,
    message: "placeholder.username.errorMessage",
    trigger: "blur",
    min: 6,
    max: 20,
  },
  password: {
    required: true,
    type: "string",
    message: "placeholder.password.errorMessage",
    trigger: "blur",
    min: 6,
  },
  confirmPassword: {
    type: "string",
    required: true,
    message: "placeholder.confirmPassword.errorMessage",
    trigger: "blur",
    min: 6,
  },
};

export const loginRulesReactivitySchema = reactive<FormRules>(loginRuleSchema);
