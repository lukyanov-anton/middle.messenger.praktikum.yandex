import { Block } from "../../../../../core";
import {Message} from "../../../../../models/chat";

import './dailyMessageRibbon.css'

interface DailyMessageRibbonProps{    
    date:string,
    messages:Message[],
}

export class DailyMessageRibbonBlock extends Block{
    constructor(props:DailyMessageRibbonProps){ 
        console.log(props);               
        super({...props});
    }
    protected render(): string {
        return `
        <div data-date="{{{dateFormat date}}}" class="daily-message-ribbon">  
            <time class="daily-message-ribbon__date">{{{dateFormat date}}}</time>
            {{#each messages}}
                <div class="daily-message-ribbon__message daily-message-ribbon__message--{{this.direction}}">
                    {{{MessageBlock id=this.id text=this.text direction=this.direction time=this.date }}}
                </div>
            {{/each}}
        </div>
        `;
    }
}