const oldTitle = getAppTitle();

export function setAppTitle(title: string): void {
  document.title = title;
}
export function getAppTitle(): string {
  return document.title;
}
export function resetAppTitle() {
  setAppTitle(oldTitle);
}
