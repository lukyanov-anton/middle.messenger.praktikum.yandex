import '../styles/app.css'

import {renderDOM, registerComponent} from '../helpers';

import ChatsPage from '../pages/chats';

import Message from '../pages/chats/components/message';
import Input from '../components/Input';

registerComponent(Message);
registerComponent(Input);


document.addEventListener('DOMContentLoaded', ()=>renderDOM("#app", ChatsPage));