type ChatConnection = {
  chatId: number;
  userId: number;
  token: string;
};

export default class ChatWebSocket {
  create(connection: ChatConnection): WebSocket {
    const { chatId, userId, token } = connection;
    return new WebSocket(
      `${process.env.WS_CHAT_ENDPOINT}/${userId}/${chatId}/${token}`
    );
  }
}
