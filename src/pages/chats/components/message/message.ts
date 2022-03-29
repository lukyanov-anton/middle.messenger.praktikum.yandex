import { Block } from "../../../../core";

export class Message extends Block{
    protected render(): string {
        return `
        <form class="form" >
            {{{Input label="Сообщение" name="message" type="text"}}}        
        </form>
        `
    }
}