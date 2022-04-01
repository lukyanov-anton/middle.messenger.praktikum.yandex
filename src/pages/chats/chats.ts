import { Block } from "../../core";
import './chats.css'

interface ChatsPageProps{
    selectedChatId:number|null;
    profileClick:()=>void;
   
}

export class ChatsPage extends Block{
    constructor(){
        const props:ChatsPageProps={
            selectedChatId:1, 
            profileClick:()=>{console.log("Покажи профиль");           
        }}
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
                {{{ Chat chatId="selectedChatId"}}}
            {{else}}
                {{{ Placeholder }}}   
            {{/if}}           
            
            </section>
        </main>
        `;
    }
}