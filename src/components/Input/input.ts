import { Block } from "../../core";
import '../../styles/form.css';

interface InputBlockProps{
    type?:'text' | 'email' | 'password'| 'tel',
    label?:string,
    value?:string,
    error?:string,
    placeholder?:string,
    name:string,    
    className:string,
    ref:string,
    onInput?:()=>void,
    onBlur?:()=>void
}

export class InputBlock extends Block{
    constructor({onInput,onBlur,...props}:InputBlockProps){        
        super({...props,events:{input:onInput, blur:onBlur}});
    }
    protected render(): string {
        return `
        <div class="form__field {{className}}" tabindex=1>
            <input 
                type='{{type}}'
                name='{{name}}' 
                class='form__input' 
                placeholder="{{placeholder}}" 
                value="{{value}}"
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