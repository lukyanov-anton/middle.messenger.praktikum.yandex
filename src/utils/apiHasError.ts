import { ApiError } from "../api/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function hasError(response: any): response is ApiError {
  return response && response.reason;
}
