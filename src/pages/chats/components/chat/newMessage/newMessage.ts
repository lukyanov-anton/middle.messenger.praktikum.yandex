import { Block } from "../../../../../core";
import './newMessage.css'

export class NewMessage extends Block{
    protected render(): string {
        return `
        <form class="new-message" >
            <button type='button' class='new-message__attach'>Вложение</button>
            <input type="text" class="new-message__input" name="message" placeholder="Сообщение">            
            <button type='submit' class='new-message__button'>Отправить</button>      
        </form>
        `;
    }
}