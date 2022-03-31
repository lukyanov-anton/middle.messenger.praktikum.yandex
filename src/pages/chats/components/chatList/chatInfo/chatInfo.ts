import { Block } from "../../../../../core";


interface ChatInfoProps{
    name:string,
    lastMessage:string,
    lastMessageDate:Date    
}

export class ChatInfo extends Block{
    constructor(props: ChatInfoProps){        
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