import { HTTPTransport } from "../core/fetch";
import { ApiError } from "./types";
type LoginRequestData = {
  login: string;
  password: string;
};

type LoginResponseData = Record<string, unknown> | ApiError;

const apiInstance = new HTTPTransport("auth");
export const authApi = {
  login: (data: LoginRequestData) =>
    apiInstance.post("signin", {
      data,
      headers: { "Content-Type": "application/json" },
    }),
  me: () => apiInstance.get("user"),
  logout: () => apiInstance.post("logout"),
};
