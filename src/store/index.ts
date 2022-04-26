import { Store } from "../core";

export const defaultState: AppState = {
  appIsInited: false,
  page: null,
  isLoading: true,
  formError: null,
  user: null,
  chats: null,
  selectedChat: null,
  selectedChatMessages: null,
};

export const AppStore = new Store<AppState>(defaultState);
