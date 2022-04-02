import { Block } from "../../../../core";
import {DailyMessages} from "../../../../models/chat";
import {ChatsStub} from "../../../../models/chat/stub";

import './chat.css'

interface ChatBlockProps{
    id:number,
    messages:DailyMessages[]
}

export class ChatBlock extends Block{
    constructor(props: ChatBlockProps){ 
        const {id:chatId}=props;
        const chat=ChatsStub.find(chat=>chat.id==chatId);      
        
        super({...props,...chat});
    }
    protected render(): string {
        return `
        <div data-chat-id="{{id}}" class="chat"> 
            <header class="chat__header">
                Заголово
            </header>
            <div class="chat__message-ribbon">
                {{#each messages}}
                    {{{ DailyMessageRibbon date=this.date messages=this.messages }}}
                {{/each}}               
            </div>
            <footer class="chat__footer">            
                {{{ NewMessage }}}
            </footer>
        </div>
        `;
    }
}