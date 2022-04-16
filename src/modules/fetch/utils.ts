export function queryStringify<T = Record<string, unknown>>(data: T) {
  if (!data) return "";
  const query = Object.entries(data)
    .map(([key, value]) => `${key}=${value.toString()}`)
    .join("&");
  return `?${query}`;
}
