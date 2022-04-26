import { HTTPTransport } from "../core/fetch";
import { ApiError, ChatDto, UserDto } from "./types";

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

type ChatUserRequestData = {
  chatId: number;
  users: number[];
};

type ChatUserResponseData = Record<string, unknown> | ApiError;

type GetChatUsersResponseData = UserDto[] | ApiError;

type GetChatTokenResponseData = { token: string } | ApiError;

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

  addUser: (data: ChatUserRequestData) =>
    apiInstance.put<ChatUserRequestData, ChatUserResponseData>("users", {
      data,
      headers: { "Content-Type": "application/json" },
    }),
  removeUser: (data: ChatUserRequestData) =>
    apiInstance.delete<ChatUserRequestData, ChatUserResponseData>("users", {
      data,
      headers: { "Content-Type": "application/json" },
    }),
  getChatUsers: (chatId: number) =>
    apiInstance.get<number, GetChatUsersResponseData>(`${chatId}/users`, {}),
  getToken: (chatId: number) =>
    apiInstance.post<number, GetChatTokenResponseData>(`token/${chatId}`, {}),
};
