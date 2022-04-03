import { Block } from "../../core";

//import './button.css'
import '../../styles/form.css'

interface ButtonProps{
    text?:string,
    mode?:string,
    onClick?:()=>void
}

export class Button extends Block{
    constructor({onClick, ...props}: ButtonProps){
        
        super({...props, events:{click:onClick}});
    }
    protected render(): string {
        return `
        <div class="form__field">
            <button type='submit' class='form__button form__button--{{mode}}'>{{text}}</button>
        </div>
        `;
    }
}