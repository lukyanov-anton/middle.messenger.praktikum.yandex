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
    searchString:string,
    searchInput:()=>void;    
}

export class ChatList extends Block{
    constructor(props: ChatListProps){        
        super({...props, searchInput:(e:any)=>{console.log(111) }});
    }
    protected render(): string {
        return `
        <div class="chat-list">
            {{{ SearchField onInput=searchInput }}}
            {{#each items}}
                {{{ ChatInfo name="{{this.name}}" }}}
            {{/each}}
        </div>
        `;
    }
}