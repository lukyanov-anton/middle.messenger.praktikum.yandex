import "./chats.css";
import { Block, Store, withStore, withUser } from "../../core";
import { withRouter } from "../../core/hoc/withRouter";
import Router from "../../core/router/BrowserRouter";
import { getChats } from "../../controllers/chats";

interface ChatsPageProps {
  router: Router;
  store: Store<AppState>;
  profileClick: () => void;
  onChatSelect: (chat: Chat) => void;
}

class ChatsPage extends Block {
  constructor(props: ChatsPageProps) {
    super(props);
    this.setProps({
      profileClick: () => {
        this.props.router.go("/profile");
      },
      onChatSelect: (chat: Chat) => {
        this.props.store.dispatch({ selectedChat: chat });
      },
    });
  }

  async componentDidMount(props: any) {
    if (!this.props.store.getState().chats) {
      await getChats();
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
                        {{{ ChatList items=store.state.chats onChatSelect=onChatSelect}}}
                    </div>
                </div>                
            </section>
            <section class="chats__right-panel">
                {{#if store.state.selectedChat }}                   
                    {{{ ChatBlock id=selectedChatId title="Citilink" chat=store.state.selectedChat }}}
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
