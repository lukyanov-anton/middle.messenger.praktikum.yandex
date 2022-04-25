import "./chats.css";
import { Block, Store, withStore, withUser } from "../../core";
import { withRouter } from "../../core/hoc/withRouter";
import Router from "../../core/router/BrowserRouter";
import { getChats } from "../../controllers/chats";

interface ChatsPageProps {
  router: Router;
  store: Store<AppState>;
  selectedChatId: number | null;
  profileClick: () => void;
}

class ChatsPage extends Block {
  constructor(props: ChatsPageProps) {
    super(props);
    this.setProps({
      selectedChatId: 296,
      profileClick: () => {
        this.props.router.go("/profile");
      },
    });
  }

  componentDidMount(props: any): void {
    if (!this.props.store.getState().chats) {
      this.props.store.dispatch(getChats);
    }
  }
  protected render(): string {
    return `
        <main>
        <div class="chats">
            <section class="chats__left-panel">
                <div class="left-panel">
                    <div class="left-panel__header">
                    {{{LinkBlock 
                      to="/chats/add"
                      text="Новый чат"
                    }}}
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
                        {{{ ChatList items=store.state.chats}}}
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
          </div>
        </main>
        `;
  }
}
export default withRouter(withStore(withUser(ChatsPage)));
