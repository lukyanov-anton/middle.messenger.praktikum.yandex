export type ApiError = {
  reason: string;
};

export type UserDto = {
  id: number;
  login: string;
  first_name: string;
};

export type RegisterDataDto = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};
