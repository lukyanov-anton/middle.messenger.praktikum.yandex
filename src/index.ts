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

import { AppStore } from "./store";
import { Router } from "./core/router";
import { initApp } from "./controllers/initApp";
import { StoreEvents } from "./core";

registerDateHelper();
registerIfHelper();
registerComponent(LinkBlock);
registerComponent(InputBlock);
registerComponent(ButtonBlock);
registerComponent(ImagePlaceholderBlock);
registerComponent(Placeholder);
registerComponent(ChatList);
registerComponent(ChatInfo);
registerComponent(ChatSearch);
registerComponent(ChatBlock);
registerComponent(DailyMessageRibbonBlock);
registerComponent(MessageBlock);
registerComponent(NewMessage);
registerComponent(AvatarBlock);
registerComponent(PropertyBlock);
registerComponent(ErrorBlock);
registerComponent(LoadingBlock);
registerComponent(AddUserToChatBlock);
registerComponent(RemoveUserFromChatBlock);

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
  //.start();

  AppStore.on(
    StoreEvents.Updated,
    (prevState: AppState, nextState: AppState) => {
      if (!prevState.appIsInited && nextState.appIsInited) {
        router.start();
      }
    }
  );
});

AppStore.dispatch(initApp);
