import "./chats.css";
import { Block } from "../../core";
import { withRouter } from "../../core/hoc/withRouter";
import Router from "../../core/router/BrowserRouter";

interface ChatsPageProps {
  router: Router;
  selectedChatId: number | null;
  profileClick: () => void;
}

class ChatsPage extends Block<ChatsPageProps> {
  constructor(props: ChatsPageProps) {
    super(props);
    this.setProps({
      selectedChatId: 1,
      profileClick: () => {
        this.props.router.go("/profile");
      },
    });
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
export default withRouter(ChatsPage);
