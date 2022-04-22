import { UserDto } from "../api/types";
import { userApi } from "../api/user";
import { AppStore } from "../store";
import { apiHasError, transformUser } from "../utils";

type ChangePasswordData = {
  oldPassword: string;
  newPassword: string;
};

type ChangeProfileData = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

export const update = async (profileData: UserDto) => {
  AppStore.dispatch({ isLoading: true });

  const response = await userApi.update(profileData);

  if (apiHasError(response)) {
    AppStore.dispatch({ isLoading: false, formError: response.reason });
    return;
  }

  AppStore.dispatch({
    isLoading: false,
    user: transformUser(response as UserDto),
  });

  window.router.go("/profile");
};

export const changePassword = async (
  changePasswordData: ChangePasswordData
) => {
  AppStore.dispatch({ isLoading: true });

  const response = await userApi.changePassword(changePasswordData);

  if (apiHasError(response)) {
    AppStore.dispatch({ isLoading: false, formError: response.reason });
    return;
  }

  AppStore.dispatch({ isLoading: false });

  window.router.go("/profile");
};

export const changeProfile = async (changeProfileData: ChangeProfileData) => {
  AppStore.dispatch({ isLoading: true });

  const response = await userApi.changePassword(changeProfileData);

  if (apiHasError(response)) {
    AppStore.dispatch({ isLoading: false, formError: response.reason });
    return;
  }

  AppStore.dispatch({ isLoading: false });

  window.router.go("/profile");
};
