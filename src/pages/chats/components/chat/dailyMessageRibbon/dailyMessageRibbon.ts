import { Block } from "../../../../../core";
import {Message} from "../../../modules/chat";


interface DailyMessageRibbonProps{    
    date:Date,
    messages:Message[],
}

export class DailyMessageRibbon extends Block{
    constructor(props:DailyMessageRibbonProps){        
        super({...props});
    }
    protected render(): string {
        return `
        <div data-date="{{date}}" class="daily-message-feed">  
            <time class="daily-message-ribbon__date">{{date}}</time>
            {{#each messages}}
                {{{MessageBlock id=this.id text=this.text direction =this.direction time=this.date }}}
            {{/each}}
        </div>
        `;
    }
}