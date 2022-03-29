import { Block } from "../../core";
import './chats.css'

export class ChatsPage extends Block{
    protected render(): string {
        return `
        <main class="chats">
            <section class="chats__left-panel">
            </section>
            <section class="chats__right-panel">
                <div class="chat">
                    <div class="chat__header"></div>
                    <div class="chat__messages"></div>
                    <div class="chat__footer">
                        {{{Message}}}
                    </div>
                </div>
            
            </section>
        </main>

        `
    }
}