import "./chatList.css";
import { Block } from "../../../../core";
import { ChatInfo } from "../../../../models/chat";

interface ChatListProps {
  items?: ChatInfo[];
  searchString: string;
  searchInput: () => void;
  onChatSelect: (chat: Chat) => void;
}

export class ChatList extends Block {
  constructor(props: ChatListProps) {
    super({
      ...props,

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
                        chat=this 
                        onChatSelect=../onChatSelect
                    }}}
                </div>
            {{/each}}
        </div>
        `;
  }
}
