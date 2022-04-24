import "./chatList.css";
import { Block } from "../../../../core";
import { ChatInfo } from "../../../../models/chat";
//import { ChatInfosStub } from "../../../../models/chat/stub";

interface ChatListProps {
  items?: ChatInfo[];
  searchString: string;
  searchInput: () => void;
  selectedChatId?: number;
}

export class ChatList extends Block {
  constructor(props: ChatListProps) {
    super({
      ...props,
      //items: ChatInfosStub,
      events: {
        input: (e: Event) => {
          if (e.target) {
            console.log((e.target as HTMLInputElement).value);
          }
        },
      },
    });
  }
  protected render(): string {
    return `
        <div class="chat-list">
            {{{ SearchFieldBlock 
                onInput=searchInput 
                placeholder="Поиск" 
                className="chat-list__search"
            }}}
            {{#each items}}
                <div class="chat-list__item">
                    {{{ ChatInfo 
                        title=this.title 
                        lastMessage=this.lastMessage 
                        lastMessageDate=this.lastMessageDate 
                        newMessageCount=this.newMessageCount 
                    }}}
                </div>
            {{/each}}
        </div>
        `;
  }
}
