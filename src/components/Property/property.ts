import { Block } from "../../core";

import "./property.css";

interface PropertyProps {
  label: string;
  value: string;
}

export class PropertyBlock<P = PropertyProps> extends Block<P> {
  protected render(): string {
    return `
        <div class="property">
          <span class="property__label">{{label}}</span>
          <span class="property__value">{{value}}</span>
        </div>
        `;
  }
}
