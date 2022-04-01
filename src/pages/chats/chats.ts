import { Block } from "../../core";
import {Chat, MessageDirection} from "./modules/chat";

import './chats.css'

interface ChatsPageProps{
    selectedChatId:number|null,
    profileClick:()=>void,
    onChatSelect:()=>void
}

export class ChatsPage extends Block{
    constructor(){
        const props:ChatsPageProps={
            selectedChatId:1,             
            profileClick:()=>{console.log("Покажи профиль")},          
            onChatSelect:()=>{console.log("Чат выбран")}        
        };  

        super(props);
    }
    protected render(): string {
        return `
        <main class="chats">
            <section class="chats__left-panel">
            {{{ BaseButton text="Профиль >" onClick=profileClick }}}
            {{{ ChatList }}}
            </section>
            <section class="chats__right-panel">
            {{#if selectedChatId }}
                {{{ ChatBlock chatId="selectedChatId"  }}}
            {{else}}
                {{{ Placeholder }}}   
            {{/if}}           
            
            </section>
        </main>
        `;
    }
}