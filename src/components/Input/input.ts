import { Block } from "../../core";

import '../../styles/form.css'

interface InputProps{
    label:string,
    name:string,
    value:string
}

export class Input extends Block{
    constructor(props:InputProps){        
        super({...props});
    }
    protected render(): string {
        return `
        <div class="form__field">
            {{#if value}}
            <label for='{{name}}' class="form__label">{{label}}</label>
            {{/if}}
            <input type='{{type}}' name='{{name}}' class='form__input' placeholder="{{label}}" value="{{value}}" />
            {{#if help }}
                <p class="form_help">{{help}}</p>
            {{/if}}
        </div>
        `;
    }
}