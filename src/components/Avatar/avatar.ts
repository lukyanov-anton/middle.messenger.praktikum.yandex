import "./avatar.css";
import { Block } from "../../core";

interface AvatarProps {
  onClick: () => void;
}

export class AvatarBlock extends Block {
  protected render(): string {
    return `
        <figure class="avatar avatar--128x128">
          <img class="avatar__image avatar__image--rounded" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" >
        </figure>
        `;
  }
}
