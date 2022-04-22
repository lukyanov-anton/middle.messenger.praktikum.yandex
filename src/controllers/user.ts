import { UserDto } from "../api/types";
import { userApi } from "../api/user";
import { AppStore } from "../store";
import { apiHasError, transformUser } from "../utils";

type ChangePasswordData = {
  oldPassword: string;
  newPassword: string;
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
