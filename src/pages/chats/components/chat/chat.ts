import "./chat.css";
import { Block } from "../../../../core";

interface ChatBlockProps {
  chat: Chat;
  messages: DailyMessages[];
  showAddUserDialog: boolean;
  showRemoveUserDialog: boolean;
  showMenu: boolean;
  addUserClick: () => void;
  cancelAddUserClick: () => void;
  removeUserClick: () => void;
  cancelRemoveUserClick: () => void;
}

export class ChatBlock extends Block {
  static componentName = "ChatBlock";
  constructor(props: ChatBlockProps) {
    const menuClick = (e: Event) => {
      if (e.target) {
        const isMenu = (e.target as HTMLDivElement).classList.contains(
          "header__controls-menu"
        );
        if (isMenu) {
          this.setProps({
            showMenu: !this.props.showMenu,
          });
        }
      }
    };
    super({ ...props, events: { click: menuClick } });
    this.setProps({
      showAddUserDialog: false,
      showRemoveUserDialog: false,
      addUserClick: () => {
        this.setProps({
          showAddUserDialog: !this.props.showAddUserDialog,
          showRemoveUserDialog: false,
          showMenu: false,
        });
      },
      cancelAddUserClick: () => {
        this.setProps({
          showAddUserDialog: false,
        });
      },
      removeUserClick: () => {
        this.setProps({
          showRemoveUserDialog: !this.props.showRemoveUserDialog,
          showAddUserDialog: false,
          showMenu: false,
        });
      },
      cancelRemoveUserClick: () => {
        this.setProps({
          showRemoveUserDialog: false,
        });
      },
    });
  }
  protected render(): string {
    return `
        <div data-chat-id="{{id}}" class="chat"> 
            <header class="chat__header header">
                <div class="header__image">
                    {{{ImagePlaceholderBlock }}}
                </div>                
                <h1 class="header__title">{{chat.title}}</h1>                   
                <div class="header__controls-menu">
                  {{#if showMenu}}
                    <div class="header__controls-panel">
                      <ul class="header__controls">
                        <li>
                          {{{ ButtonBlock 
                            text="Добавить пользователя"
                            onClick=addUserClick
                            mode="text" 
                            className="button--text header__button chat__add-user"
                          }}}
                        </li>
                        <li>
                          {{{ ButtonBlock 
                            text="Удалить пользователя"
                            onClick=removeUserClick
                            mode="text" 
                            className="button--text header__button"
                          }}}
                        </li>
                      </ul>
                    </div>
                  {{/if}}                                   
                </div>
                
            </header>
            <div class="chat__message-ribbon">
                {{#each messages}}
                    {{{ DailyMessageRibbonBlock date=this.date messages=this.messages }}}
                {{/each}}               
            </div>
            <footer class="chat__footer">            
                {{{ NewMessage chatId=chat.id}}}
            </footer>
            {{#if showAddUserDialog}}           
              {{{ AddUserToChatBlock 
                chatId=chat.id
                onCancel=cancelAddUserClick
              }}}
            {{/if}}
            {{#if showRemoveUserDialog}}           
              {{{ RemoveUserFromChatBlock 
                  chatId=chat.id
                  onCancel=cancelRemoveUserClick
              }}}
            {{/if}}
        </div>
        `;
  }
}
