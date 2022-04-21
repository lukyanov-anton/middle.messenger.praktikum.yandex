import { authApi } from "../api/authApi";
import { RegisterDataDto, UserDto } from "../api/types";
import { AppStore } from "../store";
import { apiHasError, transformUser } from "../utils";

type LoginData = {
  login: string;
  password: string;
};

export const login = async (loginData: LoginData) => {
  AppStore.dispatch({ isLoading: true });

  const response = await authApi.login(loginData);

  if (apiHasError(response)) {
    AppStore.dispatch({ isLoading: false, loginFormError: response.reason });
    return;
  }

  const responseUser = await authApi.me();

  AppStore.dispatch({ isLoading: false, loginFormError: null });

  if (apiHasError(responseUser)) {
    logout();
    return;
  }
  AppStore.dispatch({ user: transformUser(responseUser as UserDto) });

  window.router.go("/profile");
};

export const logout = async () => {
  AppStore.dispatch({ isLoading: true });

  await authApi.logout();

  AppStore.dispatch({ isLoading: false, user: null });

  window.router.go("/");
};

export const register = async (data: RegisterDataDto) => {
  AppStore.dispatch({ isLoading: true });
  await authApi.register(data);
  const responseUser = await authApi.me();
  AppStore.dispatch({ user: transformUser(responseUser as UserDto) });
  window.router.go("/profile");
};
