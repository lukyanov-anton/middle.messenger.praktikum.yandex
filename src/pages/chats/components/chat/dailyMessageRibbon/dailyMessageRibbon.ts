import "./dailyMessageRibbon.css";
import { Block } from "../../../../../core";

interface DailyMessageRibbonProps {
  date: string;
  messages: Message[];
}

export class DailyMessageRibbonBlock extends Block<DailyMessageRibbonProps> {
  static componentName = "DailyMessageRibbonBlock";
  protected render(): string {
    return `
        <div data-date="{{{dateFormat date}}}" class="daily-message-ribbon">  
            <time class="daily-message-ribbon__date">{{{dateFormat date}}}</time>
            {{#each messages}}
                <div class="daily-message-ribbon__message daily-message-ribbon__message--{{this.direction}}">
                    {{{MessageBlock id=this.id text=this.content direction=this.direction time=this.time }}}
                </div>
            {{/each}}
        </div>
        `;
  }
}
