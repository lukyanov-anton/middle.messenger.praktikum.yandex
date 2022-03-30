import '../styles/app.css'

import {renderDOM, registerComponent} from '../helpers';

import ChatsPage from '../pages/chats';
import Placeholder from '../pages/chats/components/placeholder';
import ChatList from '../pages/chats/components/chatList';
import ChatInfo from '../pages/chats/components/chatList/chatInfo';
import ChatSearch from '../pages/chats/components/chatList/chatSearch';
import MessageFeed from '../pages/chats/components/messageFeed';
import DailyMessageFeed from '../pages/chats/components/messageFeed/dailyMessageFeed';
import Message from '../pages/chats/components/messageFeed/message';
import NewMessage from '../pages/chats/components/newMessage';
import Input from '../components/Input';

registerComponent(Placeholder);
registerComponent(ChatList);
registerComponent(ChatInfo);
registerComponent(ChatSearch);
registerComponent(MessageFeed);
registerComponent(DailyMessageFeed);
registerComponent(Message);
registerComponent(NewMessage);
registerComponent(Input);


document.addEventListener('DOMContentLoaded', ()=>renderDOM("#app", ChatsPage));