import { HTTPTransport } from "../core/fetch";
import { ApiError, UserDto } from "./types";

type ChangeProfileRequestData = {
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

type ChangeProfileResponseData = UserDto | ApiError;

type ChangeAvatarRequestData = FormData;

type ChangeAvatarResponseData = UserDto | ApiError;

type SearchByLoginRequestData = {
  login: string;
};

type SearchByLoginResponseData = UserDto[] | ApiError;

const apiInstance = new HTTPTransport("user");

export const userApi = {
  update: (data: ChangeProfileRequestData) =>
    apiInstance.put<ChangeProfileRequestData, ChangeProfileResponseData>(
      "profile",
      {
        data,
        headers: { "Content-Type": "application/json" },
      }
    ),

  changePassword: (data: ChangePasswordRequestData) =>
    apiInstance.put<ChangePasswordRequestData>("password", {
      data,
      headers: { "Content-Type": "application/json" },
    }),
  changeAvatar: (data: ChangeAvatarRequestData) =>
    apiInstance.put<ChangeAvatarRequestData, ChangeAvatarResponseData>(
      "profile/avatar",
      {
        data,
      }
    ),
  searchByLogin: (data: SearchByLoginRequestData) =>
    apiInstance.post<SearchByLoginRequestData, SearchByLoginResponseData>(
      "search",
      {
        data,
        headers: { "Content-Type": "application/json" },
      }
    ),
};
