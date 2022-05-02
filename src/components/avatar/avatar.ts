import "./avatar.css";
import { Block } from "../../core";

interface AvatarBlockProps {
  src?: string;
}
export class AvatarBlock extends Block<AvatarBlockProps> {
  static componentName = "AvatarBlock";
  protected render(): string {
    return `
        <figure class="avatar avatar--128x128">
          {{#if src }}
          <img class="avatar__image avatar__image--rounded" src="{{src}}" >
          {{else}}
            <img class="avatar__image avatar__image--rounded" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" >            
          {{/if}}
        </figure>
        `;
  }
}
