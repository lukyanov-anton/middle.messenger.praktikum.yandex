import "./imagePlaceholder.css";
import { Block } from "../../core";

interface ImagePlaceholderProps {
  className: string;
}
export class ImagePlaceholderBlock extends Block {
  static componentName = "ImagePlaceholderBlock";
  constructor(props: ImagePlaceholderProps) {
    super({ ...props });
  }
  protected render(): string {
    return `
        <div class="image-placeholder image-placeholder--rounded {{#if className}} {{className}} {{else}}{{className}}image-placeholder--34x34{{/if}}"></div>
        `;
  }
}
