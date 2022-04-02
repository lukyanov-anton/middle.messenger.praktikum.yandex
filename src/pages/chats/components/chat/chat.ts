import './chat.css'
import { Block } from "../../../../core";
import {DailyMessages} from "../../../../models/chat";
import {ChatsStub} from "../../../../models/chat/stub";

interface ChatBlockProps{
    id:number,
    title:string,
    image:string,
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
            <header class="chat__header header">
                <div class="header__image">
                    {{{ImagePlaceholderBlock }}}
                </div>                
                <h1 class="header__title">{{title}}</h1>
                <div class="header__controls"></div>
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