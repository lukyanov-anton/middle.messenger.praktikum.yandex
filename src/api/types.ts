export type ApiError = {
  reason: string;
};

export type UserDto = {
  id: number;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  email: string;
  phone: string;
  avatar: string;
};

export type RegisterDataDto = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type ChangePasswordDataDto = {
  oldPassword: string;
  newPassword: string;
};

export type ChatDto = {
  id: number;
  title: string;
  avatar?: string;
  unread_count: number;
  last_message?: MessageDto;
};

export type MessageDto = {
  user: UserDto;
  time: Date;
  content: string;
};

export type ChatMessageDto = {
  id: number;
  is_read: boolean;
  content: string;
  user_id: number;
  chat_id: number;
  time: Date;
};
