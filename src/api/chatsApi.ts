import { HTTPTransport } from "../core/fetch";
import { ApiError, ChatDto } from "./types";

type ChatsRequestData = {
  offset?: number;
  limit?: number;
  title?: string;
};

type ChatsResponseData = ChatDto[] | ApiError;

const apiInstance = new HTTPTransport("chats");

export const chatsApi = {
  get: (queryData?: ChatsRequestData) =>
    apiInstance.get<ChatsRequestData, ChatsResponseData>("", {
      data: queryData,
      headers: { "Content-Type": "application/json" },
    }),
};
