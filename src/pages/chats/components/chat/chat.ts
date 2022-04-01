import { Block } from "../../../../core";
import {DailyMessages} from "../../modules/chat";

import './chat.css'

interface ChatProps{
    id:number,
    messages:DailyMessages[]
}

export class ChatBlock extends Block{
    constructor(props: ChatProps){        
        super({...props});
    }
    protected render(): string {
        return `
        <div data-chat-id="{{id}}" class="chat"> 
            <header class="chat__header">
                Заголовок
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