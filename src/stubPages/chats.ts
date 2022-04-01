import '../styles/app.css'

import {renderDOM, registerComponent} from '../helpers';

import ChatsPage from '../pages/chats';
import Placeholder from '../pages/chats/components/placeholder';
import ChatList from '../pages/chats/components/chatList';
import ChatInfo from '../pages/chats/components/chatList/chatInfo';
import ChatSearch from '../components/SearchField';
import Chat from '../pages/chats/components/chat';
import DailyMessageRibbon from '../pages/chats/components/chat/dailyMessageRibbon';
import Message from '../pages/chats/components/chat/message';
import NewMessage from '../pages/chats/components/chat/newMessage';
import Input from '../components/Input';
import BaseButton from '../components/BaseButton';


registerComponent(Placeholder);
registerComponent(ChatList);
registerComponent(ChatInfo);
registerComponent(ChatSearch);
registerComponent(Chat);
registerComponent(DailyMessageRibbon);
registerComponent(Message);
registerComponent(NewMessage);
registerComponent(Input);
registerComponent(BaseButton);


document.addEventListener('DOMContentLoaded', ()=>renderDOM("#app", ChatsPage));