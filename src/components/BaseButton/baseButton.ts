import { Block } from "../../core";

import './baseButton.css'

interface BaseButtonProps{
    text:string,   
    onClick:()=>void,
    className:string
}

export class BaseButton extends Block{
    constructor({onClick, ...props}: BaseButtonProps){
        
        super({...props, events:{click:onClick}});
    }
    protected render(): string {
        return `
        <button type="button" class="button {{className}}">{{text}}</button>
        `;
    }
}