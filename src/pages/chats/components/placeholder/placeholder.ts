import { Block } from "../../../../core";
import './placeholder.css'

export class Placeholder extends Block{
    protected render(): string {
        return `
        <div class="placeholder">
            <p class="placeholder__message">
                Выберите чат, чтобы отправить сообщение
            </p>
        </div>
        `;
    }
}