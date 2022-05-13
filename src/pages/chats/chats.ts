import "./chats.css";
import { Block, Store, withStore, withUser } from "../../core";
import { withRouter } from "../../core/hoc/withRouter";
import Router from "../../core/router/BrowserRouter";
import { getChats } from "../../controllers/chats";
import { connectToChat } from "../../controllers/chat";

interface ChatsPageProps {
  router: Router;
  store: Store<AppState>;
  user: User | null;
  profileClick: () => void;
  onChatSelect: (chat: Chat) => void;
}

class ChatsPage extends Block<ChatsPageProps> {
  static componentName = "ChatsPage";
  constructor(props: ChatsPageProps) {
    super(props);
    this.setProps({
      profileClick: () => {
        this.props.router.go("/profile");
      },
      onChatSelect: async (chat: Chat) => {
        if (this.props.user !== null) {
          this.props.store.dispatch({
            selectedChat: chat,
            selectedChatMessages: null,
          });
          await connectToChat(chat.id, this.props.user.id);
        }
      },
    });
  }

  async componentDidMount() {
    if (!this.props.store.getState().chats) {
      await getChats();
    }
  }
  protected render(): string {
    if (!this.props.user) {
      return `
        <div> no authorized user</div>
      `;
    }

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
                        {{{ ChatList 
                          items=store.state.chats 
                          onChatSelect=onChatSelect 
                          selectedChat=store.state.selectedChat}}}
                    </div>
                </div>                
            </section>
            <section class="chats__right-panel">
                {{#if store.state.selectedChat }}                   
                    {{{ ChatBlock chat=store.state.selectedChat messages=store.state.selectedChatMessages}}}
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
