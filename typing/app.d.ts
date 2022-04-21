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
    formError: string | null;
    user: User | null;
  };

  export type User = {
    id: number;
    firstName: string;
    secondName: string;
    displayName: string;
    login: string;
    email: string;
    phone: string;
  };

  export type RegisterData = {
    firstName: string;
    secondName: string;
    login: string;
    email: string;
    password: string;
    phone: string;
  };
}

export {};
