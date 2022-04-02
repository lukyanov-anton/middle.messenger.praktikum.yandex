import './styles/app.css';
import {renderDOM, registerComponent, registerDateHelper} from './helpers';
import {Block} from './core';
import BaseLayout from './components/layouts/BaseLayout';
import LoginPage from './pages/login';
import SigninPage from './pages/signin';
import ChatsPage from './pages/chats';
import ProfilePage from './pages/profile';
import NotFoundPage from './pages/404';
import InternalServerErrorPage from './pages/500';
import Placeholder from './pages/chats/components/placeholder';
import ChatList from './pages/chats/components/chatList';
import ChatInfo from './pages/chats/components/chatList/chatInfo';
import ChatSearch from './components/SearchField';
import ChatBlock from './pages/chats/components/chat';
import DailyMessageRibbonBlock from './pages/chats/components/chat/dailyMessageRibbon';
import MessageBlock from './pages/chats/components/chat/message';
import NewMessage from './pages/chats/components/chat/newMessage';
import Link from './components/Link';
import Input from './components/Input';
import Button from './components/Button';
import BaseButton from './components/BaseButton';
import ImagePlaceholderBlock from './components/ImagePlaceholder';
import Avatar from './components/Avatar';
import Property from './components/Property';

registerDateHelper();
//registerComponent(BaseLayout);
registerComponent(Link);
registerComponent(Input);
registerComponent(Button);
registerComponent(BaseButton);
registerComponent(ImagePlaceholderBlock);
registerComponent(Placeholder);
registerComponent(ChatList);
registerComponent(ChatInfo);
registerComponent(ChatSearch);
registerComponent(ChatBlock);
registerComponent(DailyMessageRibbonBlock);
registerComponent(MessageBlock);
registerComponent(NewMessage);



//const components= require('./components/**/index.ts') as {[key:string]: {default: typeof Block}};

//Object.values(components).forEach(component=>registerComponent(component.default));

document.addEventListener('DOMContentLoaded', ()=>{
    const hash = document.location.hash;    
        switch(hash){
                case '#login':{
                    renderDOM("#app",LoginPage);               
                    break;
                }
                case '#signin':{
                    renderDOM("#app",SigninPage);                
                    break;
                }
                case '#chats':{
                    renderDOM("#app",ChatsPage);                
                    break;
                }
                case '#profile':{
                    renderDOM("#app",ProfilePage);                
                    break;
                }                
                case '#404':{
                    renderDOM("#app",NotFoundPage);                
                    break;
                }
                case '#500':{
                    renderDOM("#app",InternalServerErrorPage);                
                    break;
                }
                
                default:
                    renderDOM("#app",LoginPage);
        }
    });