import Router from "../src/core/router/BrowserRouter";

declare global {
  export type Nullable<T> = T | null;

  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  export type Indexed = { [key: string]: any };

  export interface Window {
    router: Router;
  }

  export type AppState = {
    appIsInited: boolean;
    page: Pages | null;
    isLoading: boolean;
    loginFormError: string | null;
    user: User | null;
  };

  export type User = {
    id: number;
    login: string;
    firstName: string;
  };
}

export {};
