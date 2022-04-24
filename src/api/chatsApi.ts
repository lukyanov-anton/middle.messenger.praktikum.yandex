import { HTTPTransport } from "../core/fetch";
import { ApiError, ChatDto } from "./types";

type ChatsRequestData = {
  offset?: number;
  limit?: number;
  title?: string;
};

type ChatsResponseData = ChatDto[] | ApiError;

type ChatCreateRequestData = {
  title: string;
};

type ChatCreateResponseData = Record<string, unknown> | ApiError;

const apiInstance = new HTTPTransport("chats");

export const chatsApi = {
  get: (queryData?: ChatsRequestData) =>
    apiInstance.get<ChatsRequestData, ChatsResponseData>("", {
      data: queryData,
      headers: { "Content-Type": "application/json" },
    }),

  create: (data: ChatCreateRequestData) =>
    apiInstance.post<ChatCreateRequestData, ChatCreateResponseData>("", {
      data,
      headers: { "Content-Type": "application/json" },
    }),
};
