import { chatsApi } from "../api/chatsApi";
import ChatWebSocket from "../api/chatsWebSocket";
import { userApi } from "../api/userApi";
import { AppStore } from "../store";
import { apiHasError, transformChatMessage } from "../utils";

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

export const connectToChat = async (chatId: number, userId: number) => {
  const tokenResult = await chatsApi.getToken(chatId);
  if (apiHasError(tokenResult)) {
    AppStore.dispatch({ isLoading: false, formError: tokenResult.reason });
    return;
  }
  const wsFactory = new ChatWebSocket();
  try {
    const ws = wsFactory.create({ chatId, userId, token: tokenResult.token });
    ws.addEventListener("open", () => {
      console.log("Соединение установлено");

      /*  ws.send(
        JSON.stringify({
          content: "Моё первое сообщение миру!",
          type: "message",
        })
      ); */
      getMessages(ws);
    });
    ws.addEventListener("message", () => _onMessage);
    ws.addEventListener("error", () => _onSocketError);
    ws.addEventListener("close", () => _onSocketClose);
  } catch (err) {
    console.log("Не удалось подключится к чату.", err);
    setTimeout(connectToChat, 1000, chatId, userId);
  }
};

const _onMessage = (event: MessageEvent) => {
  try {
    const message = transformChatMessage(event.data);
    AppStore.dispatch({
      selectedChatMessages: [
        ...(AppStore.getState().selectedChatMessages || []),
        message,
      ],
    });
  } catch (err) {
    console.log(err);
  }
};
const _onSocketError = (event: MessageEvent, chatId: number) => {
  alert(`Ошибка соединения. \n${event}`);
  console.log(`Ошибка соединения с чтатом ${chatId}.`, event);
};
const _onSocketClose = (event: CloseEvent) => {
  if (event.wasClean) {
    console.log("Соединение закрыто чисто");
  } else {
    console.log("Обрыв соединения");
  }

  console.log(`Код: ${event.code} | Причина: ${event.reason}`);
};

const getMessages = (ws: WebSocket) => {
  ws.send(
    JSON.stringify({
      content: "0",
      type: "get old",
    })
  );
};
