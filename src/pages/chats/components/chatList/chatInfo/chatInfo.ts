import { Block } from "../../../../../core";


interface ChatListProps{
    name:string,
    lastMessage:string,
    lastMessageDate:Date    
}

export class ChatList extends Block{
    constructor(props: ChatListProps){        
        super({...props});
    }
    protected render(): string {
        return `
        <div class="chat-info">
            {{lastMessage}}
            {{lastMessageDate}}
        </div>
        `;
    }
}