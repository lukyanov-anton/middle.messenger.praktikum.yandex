import "./placeholder.css";
import { Block } from "../../../../core";

export class Placeholder extends Block {
  static componentName = "Placeholder";
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
