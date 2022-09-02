export function isString(value: unknown): value is string {
  return createTypeFactory<string, unknown>(value, "String");
}

function createTypeFactory<E extends V, V>(actualValue: V, expectedType: E): actualValue is E {
  return Object.prototype.toString.call(actualValue) === `[object ${expectedType}]`;
}
