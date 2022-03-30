import { Block } from "../../../../../core";

type Message={
    text:string,
    time:Date
};

interface DailyMessageFeedProps{
    chatId:number,
    date:Date,
    messages:Message[],
}

export class DailyMessageFeed extends Block{
    constructor(props:DailyMessageFeedProps){        
        super({...props});
    }
    protected render(): string {
        return `
        <div data-chat-id="{{chatId}}" class="daily-message-feed">
            
            {{{Message }}}
        </div>
        `;
    }
}