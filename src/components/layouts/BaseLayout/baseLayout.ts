import { Block } from "../../../core";
import "./baseLayout";

export class BaseLayout extends Block {
  protected render(): string {
    return `
            <main class="container"> {{> @partial-block }}</main>
        `;
  }
}
