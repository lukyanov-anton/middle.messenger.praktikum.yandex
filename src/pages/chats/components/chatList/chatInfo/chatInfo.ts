import "./chatInfo.css";
import { Block } from "../../../../../core";

interface ChatInfoProps {
  chat: Chat;
  onChatSelect: (chat: Chat) => void;
}

export class ChatInfo extends Block {
  constructor(props: ChatInfoProps) {
    super({
      ...props,
      events: {
        click: () => {
          this.props.onChatSelect(this.props.chat);
        },
      },
    });
  }
  protected render(): string {
    return `
        <div class="chat-info">
            <div class="chat-info__image">            
                {{{ImagePlaceholderBlock className="image-placeholder--47x47"}}}
            </div>            
            <div class="chat-info__title">
                {{chat.title}}
            </div>  
            {{#if chat.lastMessage}}          
            <div class="chat-info__last-message">
                {{chat.lastMessage.content}}
            </div>            
            <time class="chat-info__time">{{timeFormat chat.lastMessage.time}}</time>
            <span class="chat-info__new-message-count">{{chat.unreadCount}}</span>
            {{/if}}
            
        </div>
        `;
  }
}
