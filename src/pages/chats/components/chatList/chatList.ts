import './chatList.css';
import { Block } from "../../../../core";
import {ChatInfo} from "../../../../models/chat";
import {ChatInfosStub} from "../../../../models/chat/stub";

interface ChatListProps{
    items:ChatInfo[],
    searchString:string,
    searchInput:()=>void;    
}

export class ChatList extends Block{
    constructor(props: ChatListProps){        
        console.log(ChatInfosStub);
        
        super({...props, items:ChatInfosStub,events:{input:(e:InputEvent)=>{console.log(e.target.value) }} });
    }
    protected render(): string {
        return `
        <div class="chat-list">
            {{{ SearchField onInput=searchInput placeholder="Поиск" className="chat-list__search"}}}
            {{#each items}}
                <div class="chat-list__item">
                    {{{ ChatInfo title=this.title lastMessage=this.lastMessage lastMessageDate=this.lastMessageDate newMessageCount=this.newMessageCount }}}
                </div>
            {{/each}}
        </div>
        `;
    }
}