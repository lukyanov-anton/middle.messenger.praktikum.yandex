/* eslint-disable @typescript-eslint/no-explicit-any */
import Block from "../core/Block";
import Handlebars, { HelperOptions } from "handlebars";

interface BlockConstructable<Props = any> {
  new (props: Props): Block;
  componentName?: string;
}

export default function registerComponent(Component: BlockConstructable) {
  Handlebars.registerHelper(
    Component.componentName || Component.name,
    ({ hash: { ref, ...hash }, data, fn }: HelperOptions) => {
      if (!data.root.children) {
        data.root.children = {};
      }

      if (!data.root.refs) {
        data.root.refs = {};
      }

      const { children, refs } = data.root;

      const component = new Component(hash);

      children[component.id] = component;

      if (ref) {
        refs[ref] = component.getContent();
      }
      // @ts-expect-error this is not typed
      const contents = fn ? fn(this) : "";

      return `<div data-id="${component.id}">${contents}</div>`;
    }
  );
}
