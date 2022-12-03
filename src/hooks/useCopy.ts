import { getElementTextContent, isElement } from "@/helpers";

export function useWriteTextClipboard(text: string): Promise<void> {
  /* Copy the text inside the text field */
  return navigator.clipboard.writeText(text);
}

export function useReadTextClipboard(): Promise<string> {
  return navigator.clipboard.readText();
}

/**
 *
 * @param element HTMLElement
 * @returns Promise<void>
 */
export function useCopy<E extends HTMLElement>(element: E): Promise<void>;
export function useCopy(element: string): Promise<void> {
  if (isElement(element)) {
    const text = getElementTextContent(element).toString();
    return useWriteTextClipboard(text);
  }
  return useWriteTextClipboard(element);
}
