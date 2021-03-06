import { chatsApi } from "../api/chatsApi";
import ChatWebSocketFactory from "../api/chatsWebSocket";
import { userApi } from "../api/userApi";
import { AppStore } from "../store";
import { apiHasError, transformChatMessage } from "../utils";

const activeChats: Record<string, WebSocket | null> = {};

export const addUserToChat = async (login: string, chatId: number) => {
  AppStore.dispatch({ isLoading: true });

  const responseUser = await userApi.searchByLogin({ login });

  if (apiHasError(responseUser)) {
    AppStore.dispatch({ isLoading: false, formError: responseUser.reason });
    return;
  }
  if (responseUser.length > 0) {
    const firstMatchUser = responseUser[0];
    const response = await chatsApi.addUser({
      chatId,
      users: [firstMatchUser.id],
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
  const wsFactory = new ChatWebSocketFactory();
  try {
    const ws = wsFactory.create({ chatId, userId, token: tokenResult.token });
    ws.addEventListener("open", () => {
      activeChats[chatId] = ws;
      console.log("???????????????????? ??????????????????????");
      getMessages(ws);
    });
    ws.addEventListener("message", _onMessage.bind(this, userId));
    ws.addEventListener("error", _onSocketError);
    ws.addEventListener("close", _onSocketClose);
  } catch (err) {
    console.log("???? ?????????????? ?????????????????????? ?? ????????.", err);
    setTimeout(connectToChat, 1000, chatId, userId);
  }
};

export const sendMessageToChat = (chatId: number, message: string) => {
  const ws = activeChats[chatId];
  if (ws) {
    ws.send(
      JSON.stringify({
        content: message,
        type: "message",
      })
    );
  } else {
    alert("???????????????????? ?? ?????????? ???? ??????????????????????");
  }
};

const _onMessage = (userId: number, event: MessageEvent) => {
  try {
    const data = JSON.parse(event.data);
    let messages: DailyMessages[] = [];
    if (Array.isArray(data)) {
      messages = [
        {
          date: new Date(),
          messages: data.map((obj) => transformChatMessage(obj, userId)),
        },
      ];
    } else {
      messages = [
        {
          date: new Date(),
          messages: [transformChatMessage(data, userId)],
        },
      ];
    }
    AppStore.dispatch({
      selectedChatMessages: [
        ...(AppStore.getState().selectedChatMessages || []),
        ...messages,
      ],
    });
  } catch (err) {
    console.log(err);
  }
};
const _onSocketError = (event: Event) => {
  alert(`???????????? ????????????????????. \n${event}`);
};
const _onSocketClose = (event: CloseEvent) => {
  if (event.wasClean) {
    console.log("???????????????????? ?????????????? ??????????");
  } else {
    console.log("?????????? ????????????????????");
  }

  console.log(`??????: ${event.code} | ??????????????: ${event.reason}`);
  //activeChats[chatId]=null;
};

const getMessages = (ws: WebSocket) => {
  ws.send(
    JSON.stringify({
      content: "0",
      type: "get old",
    })
  );
};
