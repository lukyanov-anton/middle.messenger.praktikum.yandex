import { chatsApi } from "../api/chatsApi";

import { userApi } from "../api/userApi";

import { AppStore } from "../store";
import { apiHasError } from "../utils";

export const addUserToChat = async (login: string, chatId: number) => {
  AppStore.dispatch({ isLoading: true });

  const responseUser = await userApi.searchByLogin({ login });

  if (apiHasError(responseUser)) {
    AppStore.dispatch({ isLoading: false, formError: responseUser.reason });
    return;
  }
  if (responseUser.length > 0) {
    const response = await chatsApi.addUser({
      chatId,
      users: [responseUser[0].id],
    });
    if (apiHasError(response)) {
      AppStore.dispatch({ isLoading: false, formError: response.reason });
      return;
    }
    window.router.go("/chats");
  }
};

export const removeUserFromChat = async (login: string, chatId: number) => {
  AppStore.dispatch({ isLoading: true });

  const responseChatUsers = await chatsApi.getChatUsers(chatId);
  if (apiHasError(responseChatUsers)) {
    AppStore.dispatch({
      isLoading: false,
      formError: responseChatUsers.reason,
    });
    return;
  }
  const chatUserIds = responseChatUsers
    .filter((user) => user.login === login)
    .map((user) => user.id);

  if (chatUserIds.length > 0) {
    const response = await chatsApi.removeUser({
      chatId,
      users: chatUserIds,
    });

    if (apiHasError(response)) {
      AppStore.dispatch({ isLoading: false, formError: response.reason });
      return;
    }
    window.router.go("/chats");
  }
};
