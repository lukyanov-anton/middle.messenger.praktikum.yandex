import { LargeNumberLike } from "crypto";
import { Block } from "../../core";

import '../../styles/form.css'

interface InputProps{
    label:string,
    placeholder:string,
    name:string,
    value:string,
    className:string,
    onInput:()=>void
}

export class Input extends Block{
    constructor(props:InputProps){        
        super({...props});
    }
    protected render(): string {
        return `
        <div class="form__field {{className}}">
            {{#if value}}
            <label for='{{name}}' class="form__label">{{label}}</label>
            {{/if}}
            <input type='{{type}}' name='{{name}}' class='form__input' placeholder="{{placeholder}}" value="{{value}}" input=onInput />
            {{#if help }}
                <p class="form_help">{{help}}</p>
            {{/if}}
        </div>
        `;
    }
}