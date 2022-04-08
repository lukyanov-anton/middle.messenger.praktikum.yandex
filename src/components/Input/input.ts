import "./input.css";
import { Block } from "../../core";

interface InputBlockProps {
  type?: "text" | "email" | "password" | "tel" | "file";
  label?: string;
  value?: string;
  error?: string;
  placeholder?: string;
  name: string;
  className: string;
  ref: string;
  accept?: string;
}

export class InputBlock<P = InputBlockProps> extends Block<P> {
  protected render(): string {
    return `
        <div class="{{className}}">
            {{#if value}}
                <label for='{{name}}' class="form__label">{{label}}</label>
            {{/if}}
            <input 
                id="{{name}}"
                type="{{type}}"
                name="{{name}}" 
                class="input"
                placeholder="{{placeholder}}" 
                {{#if value}}value="{{value}}"{{/if}}
                accept="{{accept}}"
                />          
            
            {{#if error }}
                <p class="input-error">{{error}}</p>
            {{/if}}
        </div>
        `;
  }
}
