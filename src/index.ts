import "./styles/app.css";
import { renderDOM, registerComponent, registerDateHelper } from "./helpers";
import LoginPage from "./pages/login";
import SigninPage from "./pages/signin";
import ChatsPage from "./pages/chats";
import ProfilePage from "./pages/profile";
import ChangeDataPage from "./pages/profile/changedata";
import ChangePasswordPage from "./pages/profile/changepassword";
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

registerDateHelper();
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

document.addEventListener("DOMContentLoaded", () => {
  const hash = document.location.hash;
  switch (hash) {
    case "#login": {
      renderDOM("#app", LoginPage);
      break;
    }
    case "#signin": {
      renderDOM("#app", SigninPage);
      break;
    }
    case "#chats": {
      renderDOM("#app", ChatsPage);
      break;
    }
    case "#profile": {
      renderDOM("#app", ProfilePage);
      break;
    }
    case "#profile/changepassword": {
      renderDOM("#app", ChangePasswordPage);
      break;
    }
    case "#profile/changedata": {
      renderDOM("#app", ChangeDataPage);
      break;
    }
    case "#404": {
      renderDOM("#app", NotFoundPage);
      break;
    }
    case "#500": {
      renderDOM("#app", InternalServerErrorPage);
      break;
    }

    default:
      renderDOM("#app", LoginPage);
  }
});
