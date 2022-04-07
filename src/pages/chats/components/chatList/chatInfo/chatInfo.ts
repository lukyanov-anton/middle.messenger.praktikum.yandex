import "./chatInfo.css";
import { Block } from "../../../../../core";

interface ChatInfoProps {
  title: string;
  lastMessage: string;
  lastMessageDate: Date;
  newMessageCount: number;
}

export class ChatInfo extends Block {
  constructor(props: ChatInfoProps) {
    super({ ...props });
  }
  protected render(): string {
    return `
        <div class="chat-info">
            <div class="chat-info__image">            
                {{{ImagePlaceholderBlock className="image-placeholder--47x47"}}}
            </div>            
            <div class="chat-info__title">
                {{title}}
            </div>            
            <div class="chat-info__last-message">
                {{lastMessage}}
            </div>
            
            <time class="chat-info__time">{{timeFormat lastMessageDate}}</time>
            <span class="chat-info__new-message-count">{{newMessageCount}}</span>
        </div>
        `;
  }
}
