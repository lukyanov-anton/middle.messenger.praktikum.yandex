import { Block } from "../../../../../core";

type Message={
    chatId:number,
    text:string,
    time:Date
};

interface DailyMessageRibbonProps{
    chatId:number,
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
                {{{Message text=this.text}}}
            {{/each}}
        </div>
        `;
    }
}