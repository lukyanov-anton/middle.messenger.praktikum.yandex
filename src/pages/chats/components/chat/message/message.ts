import "./message.css";
import { Block } from "../../../../../core";
import { MessageDirection } from "../../../../../models/chat";

interface MessageProps {
  id: number;
  text: string;
  direction: MessageDirection;
  time: Date;
}

export class MessageBlock extends Block {
  constructor(props: MessageProps) {
    super({ ...props });
  }
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
