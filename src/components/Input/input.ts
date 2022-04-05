import './input.css';

import { Block } from "../../core";

interface InputBlockProps{
    type?:'text' | 'email' | 'password'| 'tel' |'file',
    label?:string,
    value?:string,
    error?:string,
    placeholder?:string,
    name:string,    
    className:string,
    ref:string,
    accept?:string,
    onInput?:()=>void,
    onBlur?:()=>void
}

export class InputBlock extends Block{
    constructor({onInput,onBlur,...props}:InputBlockProps){        
        super({...props,events:{input:onInput, blur:onBlur}});
    }
    protected render(): string {
        return `
        <div class="{{className}}" tabindex=1>
            <input 
                type='{{type}}'
                name='{{name}}' 
                class='input' 
                placeholder="{{placeholder}}" 
                value="{{value}}"
                accept="{{accept}}"
                />          
            
            {{#if error }}
                <p class="field-error">{{error}}</p>
            {{/if}}
        </div>
        `;
    }
}

/* {{#if value}}
<label for='{{name}}' class="form__label">{{label}}</label>
{{/if}} */