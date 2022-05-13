import "./loading.css";
import { Block } from "../../core";

export class LoadingBlock extends Block {
  static componentName = "LoadingBlock";
  protected render(): string {
    return `
        <div class="loading">
            <p class="loading-content">Loading...</p>
        </div>
        `;
  }
}
