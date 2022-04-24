import "./chatInfo.css";
import { Block } from "../../../../../core";

interface ChatInfoProps {
  title: string;
  lastMessage?: Message;

  unreadCount: number;
  avatar?: string;
}

export class ChatInfo extends Block<ChatInfoProps> {
  protected render(): string {
    return `
        <div class="chat-info">
            <div class="chat-info__image">            
                {{{ImagePlaceholderBlock className="image-placeholder--47x47"}}}
            </div>            
            <div class="chat-info__title">
                {{title}}
            </div>  
            {{#if lastMessage}}          
            <div class="chat-info__last-message">
                {{lastMessage.content}}
            </div>            
            <time class="chat-info__time">{{timeFormat lastMessage.time}}</time>
            <span class="chat-info__new-message-count">{{unreadCount}}</span>
            {{/if}}
            
        </div>
        `;
  }
}
