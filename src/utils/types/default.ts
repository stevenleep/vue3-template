export const builtinSimpleTypes = [
  "String",
  "Number",
  "Boolean",
  "Undefined",
  "Null",
  "Symbol",
  "BigInt",
] as const;
export const builtinComplexTypes = [
  "Object",
  "Array",
  "Function",
  "Date",
  "RegExp",
  "Error",
  "Map",
  "Set",
  "WeakMap",
  "WeakSet",
] as const;

export const builtinTypes = [...builtinSimpleTypes, ...builtinComplexTypes] as const;

export type BuiltinSimpleType = typeof builtinSimpleTypes[number];
export type BuiltinComplexType = typeof builtinComplexTypes[number];
export type BuiltinType = BuiltinSimpleType | BuiltinComplexType;
