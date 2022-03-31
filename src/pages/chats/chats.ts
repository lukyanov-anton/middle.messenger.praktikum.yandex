import { Block } from "../../core";
import './chats.css'

export class ChatsPage extends Block{
    protected render(): string {
        return `
        <main class="chats">
            <section class="chats__left-panel">
            </section>
            <section class="chats__right-panel">
            {{{ Placeholder }}}               
            
            </section>
        </main>
        `;
    }
}