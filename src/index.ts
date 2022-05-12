/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles/app.css";

import {
  registerComponent,
  registerDateHelper,
  registerIfHelper,
} from "./helpers";

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
import ChatBlock from "./pages/chats/components/chat";
import DailyMessageRibbonBlock from "./pages/chats/components/chat/dailyMessageRibbon";
import MessageBlock from "./pages/chats/components/chat/message";
import NewMessage from "./pages/chats/components/chat/newMessage";
import AddUserToChatBlock from "./pages/chats/components/chat/addUser";
import RemoveUserFromChatBlock from "./pages/chats/components/chat/removeUser";
import * as components from "./components";

import { AppStore } from "./store";
import { Router } from "./core/router";
import { initApp } from "./controllers/initApp";
import { StoreEvents } from "./core";

registerDateHelper();
registerIfHelper();
registerComponent(Placeholder);
registerComponent(ChatList);
registerComponent(ChatInfo);
registerComponent(ChatBlock);
registerComponent(DailyMessageRibbonBlock);
registerComponent(MessageBlock);
registerComponent(NewMessage);
registerComponent(AddUserToChatBlock);
registerComponent(RemoveUserFromChatBlock);
Object.values(components).forEach((Component: any) => {
  registerComponent(Component);
});

document.addEventListener("DOMContentLoaded", () => {
  const router = new Router("#app");

  window.router = router;

  router
    .use("/", LoginPage, { title: "Вход" })
    .use("/login", LoginPage, { title: "Вход" })
    .use("/signin", SigninPage, { title: "Регистрация" })
    .use("/profile", ProfilePage, { title: "Профиль" })
    .use("/profile/changepassword", ChangePasswordPage)
    .use("/profile/changedata", ChangeDataPage)
    .use("/profile/changeavatar", ChangeAvatarPage)
    .use("/chats", ChatsPage)
    .use("/chats/add", ChatCreatePage)
    .use("/error", InternalServerErrorPage)
    .use("*", NotFoundPage);

  AppStore.on(StoreEvents.Updated, (prevState, nextState) => {
    if (
      !(prevState as AppState).appIsInited &&
      (nextState as AppState).appIsInited
    ) {
      router.start();
    }
  });
});

AppStore.dispatch(initApp);
