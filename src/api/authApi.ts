import { HTTPTransport } from "../core/fetch";

import { ApiError, UserDto } from "./types";

type LoginRequestData = {
  login: string;
  password: string;
};

type RegisterRequestData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

type LoginResponseData = Record<string, unknown> | ApiError;

const apiInstance = new HTTPTransport("auth");

export const authApi = {
  login: (data: LoginRequestData) =>
    apiInstance.post<LoginResponseData>("signin", {
      data,
      headers: { "Content-Type": "application/json" },
    }),

  getCurrentUser: () => apiInstance.get<UserDto | ApiError>("user"),

  logout: () => apiInstance.post("logout"),

  register: (data: RegisterRequestData) =>
    apiInstance.post("signup", {
      data,
      headers: { "Content-Type": "application/json" },
    }),
};
