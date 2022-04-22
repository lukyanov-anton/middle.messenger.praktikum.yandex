export type ApiError = {
  reason: string;
};

export type UserDto = {
  id: number;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  email: string;
  phone: string;
};

export type RegisterDataDto = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type ChangePasswordDataDto = {
  oldPassword: string;
  newPassword: string;
};
