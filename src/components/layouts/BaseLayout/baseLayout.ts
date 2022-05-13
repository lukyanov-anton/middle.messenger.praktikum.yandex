import { Block } from "../../../core";
import { withIsLoading } from "../../../core/hoc";
import "./baseLayout";

interface BaseLayoutProps {
  isLoading: boolean;
  fullscrean: string;
}
class BaseLayout extends Block<BaseLayoutProps> {
  static componentName = "BaseLayout";
  protected render(): string {
    return `
        {{#if fullscrean}}
          <main>
        {{else}}
          <main class="container {{className}}">
        {{/if}}                
          <div data-layout="1"></div>           
          {{#if isLoading}} {{{LoadingBlock}}} {{/if}}   
        </main>                  
        `;
  }
}

export default withIsLoading(BaseLayout);
