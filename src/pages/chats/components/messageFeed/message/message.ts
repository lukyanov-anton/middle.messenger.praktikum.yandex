import { Block } from "../../../../../core";

type MessageDirection="in"|"out";

interface MessageProps{
    id:number,
    text:string,
    direction:MessageDirection,
    time:Date
}

export class Message extends Block{
    constructor(props:MessageProps){        
        super({...props});
    }
    protected render(): string {
        return `
        <div data-id="{{id}}" class="message message--{{direction}}">
            <p class="message__text">
                {{text}}        
            </p>
            <time class="message__time">{{date}}</time>
        </div>
        `;
    }
}