import { Block } from "../../core";

//import './button.css'
import '../../styles/form.css'

interface ButtonProps{
    text?:string,
    mode?:string,
    type?:'submit'|'button',
    onClick?:()=>void,
    className?:string
}

export class Button extends Block{
    constructor({onClick, ...props}: ButtonProps){
        
        super({...props, events:{click:onClick}});
    }
    protected render(): string {
        return `
        <div class="form__field {{className}}">
            <button type={{#if type}}{{type}}{{else}}'submit'{{/if}} class='form__button form__button--{{mode}}'>{{text}}</button>
        </div>
        `;
    }
}