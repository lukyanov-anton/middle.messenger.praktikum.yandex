import "./link.css";
import { Block } from "../../core";

interface LinkProps {
  to: string;
  text: string;
}

export class LinkBlock extends Block {
  protected render(): string {
    return `
        <a href='{{to}}' class='link'>{{text}}</a> 
        `;
  }
}
