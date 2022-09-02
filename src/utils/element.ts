export function isSelectableElement(
  element: HTMLElement,
): element is HTMLInputElement | HTMLTextAreaElement {
  return (
    element instanceof HTMLInputElement ||
    element instanceof HTMLTextAreaElement ||
    isContentEditableElement(element)
  );
}

export function isContentEditableElement<SE = HTMLElement>(element: SE) {
  return element instanceof HTMLElement && element.isContentEditable;
}

export function isElement(element: unknown): element is HTMLElement {
  return element instanceof HTMLElement;
}

export function getElementTextContent(element: HTMLElement): string | number {
  if (isSelectableElement(element)) {
    return element.value;
  } else {
    return element.textContent || element.innerText || "";
  }
}
