import "./link.css";
import { Block } from "../../core";

interface LinkProps {
  to: string;
  text: string;
}

export class LinkBlock<P = LinkProps> extends Block<P> {
  protected render(): string {
    return `
        <a href='{{to}}' class='link'>{{text}}</a> 
        `;
  }
}
