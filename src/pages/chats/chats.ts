import "./chats.css";
import { Block } from "../../core";

interface ChatsPageProps {
  selectedChatId: number | null;
  profileClick: () => void;
}

export class ChatsPage extends Block {
  constructor() {
    const props: ChatsPageProps = {
      selectedChatId: 1,
      profileClick: () => {
        console.log("Переход к профиль");
      },
    };

    super(props);
  }
  protected render(): string {
    return `
        <main class="chats">
            <section class="chats__left-panel">
                <div class="left-panel">
                    <div class="left-panel__header">
                        <div class="left-panel__profile">
                            {{{ ButtonBlock 
                                text="Профиль >" 
                                onClick=profileClick
                                mode="text" 
                                className="button--text"
                            }}}
                        </div>
                    </div>
                    <div class="left-panel__content">
                        {{{ ChatList items=chatInfos}}}
                    </div>
                </div>                
            </section>
            <section class="chats__right-panel">
                {{#if selectedChatId }}
                    {{{ ChatBlock id=selectedChatId title="Citilink" }}}
                {{else}}
                    {{{ Placeholder }}}   
                {{/if}}
            </section>
        </main>
        `;
  }
}
