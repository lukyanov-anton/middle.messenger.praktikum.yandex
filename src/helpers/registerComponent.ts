import Block from '../core/Block';
import Handlebars, { HelperOptions } from 'handlebars';

interface BlockConstructable<Props = any> {
  new(props: Props): Block;
}

export default function registerComponent<Props = any>(Component: BlockConstructable) {
  Handlebars.registerHelper(Component.name, function ({ hash: { ref, ...hash }, data,fn,inverse }: HelperOptions) {
    if(inverse){
      debugger
    }
    if(fn){        
        return new Handlebars.SafeString(fn(this));
    }else{
    
    
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

    return `<div data-id="${component.id}"></div>`;
  }
  })
}