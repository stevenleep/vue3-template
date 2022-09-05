import { BuiltinType } from "./default";

export function createTypeCheckerFactory<ExpectedType>(
  value: unknown,
  expectedTypeDescription: BuiltinType,
): value is ExpectedType {
  return Object.prototype.toString.call(value) === `[object ${expectedTypeDescription}]`;
}
