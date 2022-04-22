import { HTTPTransport } from "../core/fetch";
import { ApiError, UserDto } from "./types";

type ProfileRequestData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
  display_name: string;
};

type ChangePasswordRequestData = {
  oldPassword: string;
  newPassword: string;
};

type ProfileResponseData = UserDto | ApiError;

const apiInstance = new HTTPTransport("user");

export const userApi = {
  update: (data: ProfileRequestData) =>
    apiInstance.post<ProfileRequestData, ProfileResponseData>("profile", {
      data,
      headers: { "Content-Type": "application/json" },
    }),

  changePassword: (data: ChangePasswordRequestData) =>
    apiInstance.put<ChangePasswordRequestData>("password", {
      data,
      headers: { "Content-Type": "application/json" },
    }),
};
