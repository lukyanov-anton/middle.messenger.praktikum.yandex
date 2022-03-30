import { Block } from "../../../../core";

export class NewMessage extends Block{
    protected render(): string {
        return `
        <form class="new-message" >
            <button type='button' class='new-message__attach'></button>
            {{{Input label="Сообщение" name="message" type="text"}}} 
            <button type='submit' class='new-message__button'></button>      
        </form>
        `
    }
}