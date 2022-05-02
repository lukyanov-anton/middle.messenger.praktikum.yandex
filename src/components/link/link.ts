import "./link.css";
import { Block } from "../../core";

interface LinkProps {
  to: string;
  text: string;
}

export class LinkBlock extends Block {
  static componentName = "LinkBlock";
  constructor(props: LinkProps) {
    const onClick = (e: MouseEvent) => {
      window.router.go(this.props.to);
      e.preventDefault();
    };

    super({ ...props, events: { click: onClick } });
  }
  protected render(): string {
    return `
        <a href='{{to}}' class='link' click=>{{text}}</a> 
        `;
  }
}
