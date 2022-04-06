import { Block } from "../../core";

import './form.css'

interface FormProps{
    onFocus?:()=>void,
    onBlur?:()=>void,
    onSubmit?:()=>void,
    className?:string
}

export class FormBlock extends Block{
    constructor({onFocus,onBlur,onSubmit, ...props}: FormProps){        
        super({...props, events:{focus:onFocus, blur:onBlur, submit: onSubmit }});
    }
    protected render(): string {
        return `
        <form  id="111"class="form form--vertical {{className}}">
            <input type="text" >
        </form>
        `;
    }
}