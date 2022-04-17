import { Store } from "../core";

export const defaultState: AppState = {
  page: null,
  isLoading: true,
  loginFormError: null,
  user: null,
};

export const AppStore = new Store<AppState>(defaultState);
