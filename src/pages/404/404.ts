import "./404.css";
import { Block } from "../../core";

export class NotFoundPage extends Block {
  protected render(): string {
    return `   
            <main class="container"> 
                <div class='page-404'>
                    <div class='page-404__message'>
                    </div>                    
                    {{{ LinkBlock 
                      to="/chats" 
                      text="Назад к чатам"}}}
                </div>                
            </main>
        `;
  }
}
