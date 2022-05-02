import { chatsApi } from "../api/chatsApi";
import { ChatDto } from "../api/types";

import { AppStore } from "../store";
import { apiHasError, transformChats } from "../utils";

export const getChats = async () => {
  AppStore.dispatch({ isLoading: true });

  const response = await chatsApi.get();

  if (apiHasError(response)) {
    AppStore.dispatch({ isLoading: false, formError: response.reason });
    return;
  }

  AppStore.dispatch({
    isLoading: false,
    chats: transformChats(response as ChatDto[]),
  });
};

export const createChat = async (title: string) => {
  AppStore.dispatch({ isLoading: true });

  const response = await chatsApi.create({ title });

  if (apiHasError(response)) {
    AppStore.dispatch({ isLoading: false, formError: response.reason });
    return;
  }

  await getChats();

  window.router.go("/chats");
};
