import { Block } from "../../../../core";


type ChatInfo={
    name:string,
    image:string,
    newMessageCount:number,
    lastMessage:string,
    lastMessageDate:Date
}

interface ChatListProps{
    items:ChatInfo[],    
}

export class ChatList extends Block{
    constructor(props: ChatListProps){        
        super({...props});
    }
    protected render(): string {
        return `
        <div class="chat-list">
            {{{ SearchField }}}
            {{#each items}}
                {{{ChatInfo name={{this.name}} }}}
            {{/each}}
        </div>
        `;
    }
}