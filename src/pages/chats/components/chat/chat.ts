import './chat.css'

import { Block } from "../../../../core";
import {DailyMessages} from "../../../../models/chat";
import {ChatsStub} from "../../../../models/chat/stub";



interface ChatBlockProps{
    id:number,
    messages:DailyMessages[]
}

export class ChatBlock extends Block{
    constructor(props: ChatBlockProps){ 
        const {id:chatId}=props;
        const chat=ChatsStub.find(chat=>chat.id==chatId);              
        console.log("chat",chat);
        
        super({...props,...chat});
    }
    protected render(): string {
        return `
        <div data-chat-id="{{id}}" class="chat"> 
            <header class="chat__header">
                Заголовок 123
            </header>
            <div class="chat__message-ribbon">
                {{#each messages}}
                    {{{ DailyMessageRibbonBlock date=this.date messages=this.messages }}}
                {{/each}}               
            </div>
            <footer class="chat__footer">            
                {{{ NewMessage }}}
            </footer>
        </div>
        `;
    }
}