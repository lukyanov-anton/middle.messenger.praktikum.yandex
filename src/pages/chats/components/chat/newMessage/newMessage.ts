import { Block } from "../../../../../core";
import './newMessage.css'

export class NewMessage extends Block{
    protected render(): string {
        return `
        <form class="new-message" >
            <button type='button' class='new-message__attach'>Вложение</button>
            {{{Input label="Сообщение" name="message" type="text" className="new-message__input"}}} 
            <button type='submit' class='new-message__button'>Отправить</button>      
        </form>
        `;
    }
}