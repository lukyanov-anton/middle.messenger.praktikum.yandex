import "./chatList.css";
import { Block } from "../../../../core";

interface ChatListProps {
  items?: Chat[];
  searchString: string;
  searchInput: () => void;
  onChatSelect: (chat: Chat) => void;
  selectedChat: Chat;
}

export class ChatList extends Block {
  static componentName = "ChatList";
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
    this.setProps({
      isSelectedChat: (id: number) => {
        return this.props.selectedChat.id === id;
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
                {{#ifEquals ../selectedChat.id this.id}}
                  <div class="chat-list__item chat-list__item--selected">
                {{else}}
                  <div class="chat-list__item">
                {{/ifEquals}}
                   {{{ ChatInfo                         
                        chat=this 
                        onChatSelect=../onChatSelect
                    }}}
                  </div>
            {{/each}}
        </div>
        `;
  }
}
