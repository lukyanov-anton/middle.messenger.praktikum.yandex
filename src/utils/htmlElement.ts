export function isNamedInput(
  element: EventTarget | null
): element is HTMLInputElement {
  return (
    (element as HTMLInputElement).name !== undefined &&
    (element as HTMLInputElement).name !== ""
  );
}
