import "../styles/app.css";
import { renderDOM, registerComponent, registerDateHelper } from "../helpers";
import ChatsPage from "../pages/chats";
import Placeholder from "../pages/chats/components/placeholder";
import ChatList from "../pages/chats/components/chatList";
import ChatInfo from "../pages/chats/components/chatList/chatInfo";
import ChatSearch from "../components/searchField";
import ChatBlock from "../pages/chats/components/chat";
import DailyMessageRibbonBlock from "../pages/chats/components/chat/dailyMessageRibbon";
import MessageBlock from "../pages/chats/components/chat/message";
import NewMessage from "../pages/chats/components/chat/newMessage";
import ImagePlaceholderBlock from "../components/imagePlaceholder";
import LinkBlock from "../components/link";
import InputBlock from "../components/input";
import ButtonBlock from "../components/button";

registerDateHelper();
registerComponent(ImagePlaceholderBlock);
registerComponent(Placeholder);
registerComponent(ChatList);
registerComponent(ChatInfo);
registerComponent(ChatSearch);
registerComponent(ChatBlock);
registerComponent(DailyMessageRibbonBlock);
registerComponent(MessageBlock);
registerComponent(NewMessage);
registerComponent(LinkBlock);
registerComponent(InputBlock);
registerComponent(ButtonBlock);

document.addEventListener("DOMContentLoaded", () =>
  renderDOM("#app", ChatsPage)
);
