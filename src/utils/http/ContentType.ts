export const ContentType = {
  JSON: "application/json;charset=UTF-8",
  FORM_URLENCODED: "application/x-www-form-urlencoded;charset=UTF-8",
  FORM_DATA: "multipart/form-data;charset=UTF-8",
  TEXT: "text/plain;charset=UTF-8",
  STREAM: "application/octet-stream;charset=UTF-8",
} as const;

export type OptionalContentType = keyof typeof ContentType;
export type ContentTypes = typeof ContentType[keyof typeof ContentType];

export function getContentType<ContentTypeKeys extends OptionalContentType>(
  type: ContentTypeKeys,
): typeof ContentType[ContentTypeKeys] {
  return ContentType[type];
}

export function isSupportedContentType(key: string): boolean {
  return Reflect.has(ContentType, key);
}
