import "./error.css";
import { Block } from "../../core";

interface ErrorProps {
  value?: string;
}

export class ErrorBlock extends Block {
  static componentName = "ErrorBlock";

  constructor(props: ErrorProps) {
    super(props);
  }

  protected render(): string {
    return `
      <div class="error">{{#if value}}{{value}}{{/if}}</div>
    `;
  }
}
