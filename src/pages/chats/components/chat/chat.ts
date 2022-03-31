import { Block } from "../../../../core";
import './chat.css'

interface ChatProps{
    id:number
}

export class Chat extends Block{
    constructor(props: ChatProps){        
        super({...props});
    }
    protected render(): string {
        return `
        <div data-chat-id="{{id}}" class="chat"> 
            <header class="chat__header">
            </header>
            <div class="chat__message-ribbon">

            </div>
            <footer class="chat__footer>
                {{{NewMessage}}}
            </footer>
        </div>
        `;
    }
}