import { Store, StoreEvents } from "../core";

export const defaultState: AppState = {
  appIsInited: false,
  page: null,
  isLoading: true,
  formError: null,
  user: null,
  chats: null,
  selectedChatId: null,
  showAddUserDialog: false,
};

export const AppStore = new Store<AppState>(defaultState);

AppStore.on(StoreEvents.Updated, (prevState, nextState) => {
  if (process.env.DEBUG) {
    console.log(
      "%cstore updated",
      "background: #222; color: #bada55",
      nextState
    );
  }
});
