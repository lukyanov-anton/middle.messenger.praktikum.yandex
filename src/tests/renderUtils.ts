/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  registerComponent,
  registerDateHelper,
  registerIfHelper,
} from "../helpers";
import * as components from "../components";
import { Block } from "../core";

import LoginPage from "./pages/login";
import SigninPage from "./pages/signin";
import ChatsPage from "./pages/chats";
import ChatCreatePage from "./pages/chats/create";

import ProfilePage from "./pages/profile";
import ChangeDataPage from "./pages/profile/changedata";
import ChangePasswordPage from "./pages/profile/changepassword";
import ChangeAvatarPage from "./pages/profile/changeavatar";
import NotFoundPage from "./pages/404";
import InternalServerErrorPage from "./pages/500";
import Placeholder from "./pages/chats/components/placeholder";
import ChatList from "./pages/chats/components/chatList";
import ChatInfo from "./pages/chats/components/chatList/chatInfo";
import ChatSearch from "./components/searchField";
import ChatBlock from "./pages/chats/components/chat";
import DailyMessageRibbonBlock from "./pages/chats/components/chat/dailyMessageRibbon";
import MessageBlock from "./pages/chats/components/chat/message";
import NewMessage from "./pages/chats/components/chat/newMessage";
import LinkBlock from "./components/link";
import InputBlock from "./components/input";
import ButtonBlock from "./components/button";
import ImagePlaceholderBlock from "./components/imagePlaceholder";
import AvatarBlock from "./components/avatar";
import PropertyBlock from "./components/property";
import ErrorBlock from "./components/error";
import LoadingBlock from "./components/loading";
import AddUserToChatBlock from "./pages/chats/components/chat/addUser";
import RemoveUserFromChatBlock from "./pages/chats/components/chat/removeUser";

export function registerAllBlocks() {
  Object.values(components).forEach((Component: any) => {
    registerComponent(Component);
  });

  registerDateHelper();
  registerIfHelper();
}
/* function renderBlock<T extends Object>({ Block, props }: RenderBlockParams<T>) {
  document.body.innerHTML = '<div id="app"></div>';

  renderDOM(new Block(props as T));
} */
