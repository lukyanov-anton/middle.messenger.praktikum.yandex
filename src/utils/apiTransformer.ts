import { UserDto } from "../api/types";

export const transformUser = (data: UserDto): User => {
  return {
    id: data.id,
    login: data.login,
    firstName: data.first_name,
  };
};
