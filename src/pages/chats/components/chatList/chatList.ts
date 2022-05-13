import "./chatList.css";
import { Block } from "../../../../core";

interface ChatListProps {
  items?: Chat[];
  filteredItems?: Chat[];
  searchString: string;
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
            const searchString = (e.target as HTMLInputElement).value;
            this.setProps({
              searchString: searchString,
              filteredItems: this.props.items.filter((chat: Chat) =>
                chat.title.startsWith(searchString)
              ),
            });
          }
        },
      },
    });
    if (props.searchString && props.items) {
      this.setProps({
        filteredItems: props.items.filter((chat: Chat) =>
          chat.title.startsWith(props.searchString)
        ),
      });
    } else {
      this.setProps({
        filteredItems: props.items,
      });
    }
  }
  protected render(): string {
    return `
        <div class="chat-list">
            {{{ SearchFieldBlock 
                onInput=searchInput 
                placeholder="Поиск" 
                value=searchString
                className="chat-list__search"
            }}}
            {{#each filteredItems}}
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
