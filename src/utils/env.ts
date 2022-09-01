export const isDev = getEnv("NODE_ENV") === "development";
export const isProd = getEnv("NODE_ENV") === "production";
export const isTest = getEnv("NODE_ENV") === "test";

export function getEnvs(): ImportMetaEnv {
  return import.meta.env;
}

export function getEnv(key: string): string {
  return getEnvs()[key];
}

export function getEnvOrThrow(key: string): string {
  const value = getEnv(key);
  if (value === undefined) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}
export function getEnvOrDefault(key: string, defaultValue: string): string {
  const value = getEnv(key);
  return value === undefined ? defaultValue : value;
}

export function hasEnv(key: string): boolean {
  return getEnv(key) !== undefined;
}
