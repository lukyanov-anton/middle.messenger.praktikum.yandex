import { Block } from "../../core";

import './button.css'

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
        <div class="{{className}}">
            <button type={{#if type}}{{type}}{{else}}'submit'{{/if}} class='button button--{{mode}}'>{{text}}</button>
        </div>
        `;
    }
}