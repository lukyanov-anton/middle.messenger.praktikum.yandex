import { Block } from "../../core";

import './404.css';

export class NotFoundPage extends Block{
    
    protected render(): string {
        return `   
            <main class="container"> 
                <div class='page-404'>
                    <div class='page-404__message'>
                    </div>
                    {{{ Link to='chats.html' text="Назад к чатам"}}}
                </div>                
            </main>
        `;        
    }
}