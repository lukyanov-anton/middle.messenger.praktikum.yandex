import './500.css';
import { Block } from "../../core";

export class InternalServerErrorPage extends Block{
    
    protected render(): string {
        return `   
            <main class="container"> 
                <div class='page-500'>
                    <div class='page-500__message'>
                    </div>  
                    {{{ Link to='chats.html' text="Назад к чатам"}}}
                </div>
            </main>
        `;        
    }
}