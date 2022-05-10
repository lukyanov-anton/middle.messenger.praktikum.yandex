/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  registerComponent,
  registerDateHelper,
  registerIfHelper,
} from "../helpers";
import * as components from "../components";
/* import { Block } from "../core";
import Placeholder from "./pages/chats/components/placeholder";
import ChatList from "./pages/chats/components/chatList";
import ChatInfo from "./pages/chats/components/chatList/chatInfo";
import ChatBlock from "./pages/chats/components/chat";
import DailyMessageRibbonBlock from "./pages/chats/components/chat/dailyMessageRibbon";
import MessageBlock from "./pages/chats/components/chat/message";
import NewMessage from "./pages/chats/components/chat/newMessage";
import AddUserToChatBlock from "./pages/chats/components/chat/addUser";
import RemoveUserFromChatBlock from "./pages/chats/components/chat/removeUser"; */

export function registerAllBlocks() {
  Object.values(components).forEach((Component: any) => {
    registerComponent(Component);
  });

  registerDateHelper();
  registerIfHelper();
}
