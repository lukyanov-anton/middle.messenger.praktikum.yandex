import "./message.css";
import { Block } from "../../../../../core";

interface MessageProps {
  id: number;
  text: string;
  direction: MessageDirection;
  time: Date;
}

export class MessageBlock extends Block<MessageProps> {
  static componentName = "MessageBlock";
  protected render(): string {
    return `
        <div data-id="{{id}}" class="message message--{{direction}}">
            <p class="message__text">
                {{text}}       
            </p>
            <time class="message__time" datetime=time>{{timeFormat time}}</time>
        </div>
        `;
  }
}
