import { Block } from "../../../../core";

enum MessageDirection={
    "in",
    "out"
}

type Message{
    id:number,
    text:string,
    direction:MessageDirection,
    time:Date
}

type ChatInfo={
    name:string,
    image:string,
    newMessageCount:number,
    lastMessage:Message
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
            {{#each chatList}}
                {{ChatInfo}}
            {{/each}}
        </div>
        `;
    }
}