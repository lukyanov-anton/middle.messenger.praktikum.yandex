import { authApi } from "../api/authApi";
import { UserDto } from "../api/types";
import { Dispatch } from "../core";
import { apiHasError, transformUser } from "../utils";

export async function initApp(dispatch: Dispatch<AppState>) {
  try {
    const response = await authApi.me();

    if (apiHasError(response)) {
      console.error(response.reason);
      return;
    }

    dispatch({ user: transformUser(response as UserDto) });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ appIsInited: true });
  }
}
