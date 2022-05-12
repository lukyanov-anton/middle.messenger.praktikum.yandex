import { ChatDto, ChatMessageDto, MessageDto, UserDto } from "../api/types";

export const transformUser = (data: UserDto): User => {
  return {
    id: data.id,
    login: data.login,
    firstName: data.first_name,
    secondName: data.second_name,
    displayName: data.display_name,
    email: data.email,
    phone: data.phone,
    avatar: `${process.env.API_ENDPOINT}/resources/${data.avatar}`,
  };
};

export const transformMessage = (data?: MessageDto): Message | null => {
  return data
    ? {
        user: transformUser(data.user),
        time: new Date(data.time),
        content: data.content,
      }
    : null;
};

export const transformChats = (data: ChatDto[]): Chat[] => {
  return data.map((dto) => {
    return {
      id: dto.id,
      title: dto.title,
      unreadCount: dto.unread_count,
      lastMessage: transformMessage(dto.last_message),
      avatar: `${process.env.API_ENDPOINT}/resources/${dto.avatar}`,
    } as Chat;
  });
};

export const transformChatMessage = (
  data: ChatMessageDto,
  userId: number
): ChatMessage => {
  return {
    id: data.id,
    isRead: data.is_read,
    content: data.content,
    userId: data.user_id,
    chatId: data.chat_id,
    direction: data.user_id === userId ? "out" : "in",
    time: new Date(data.time),
  } as ChatMessage;
};
