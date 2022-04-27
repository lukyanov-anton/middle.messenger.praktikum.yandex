import "./chat.css";
import { Block } from "../../../../core";

interface ChatBlockProps {
  chat: Chat;
  messages: DailyMessages[];
  showAddUserDialog: boolean;
  showRemoveUserDialog: boolean;
  addUserClick: () => void;
  cancelAddUserClick: () => void;
  removeUserClick: () => void;
  cancelRemoveUserClick: () => void;
}

export class ChatBlock extends Block<ChatBlockProps> {
  static componentName = "ChatBlock";
  constructor(props: ChatBlockProps) {
    super(props);
    this.setProps({
      showAddUserDialog: false,
      showRemoveUserDialog: false,
      addUserClick: () => {
        this.props.showAddUserDialog = !this.props.showAddUserDialog;
        this.props.showRemoveUserDialog = false;
      },
      cancelAddUserClick: () => {
        this.props.showAddUserDialog = false;
      },
      removeUserClick: () => {
        this.props.showRemoveUserDialog = !this.props.showRemoveUserDialog;
        this.props.showAddUserDialog = false;
      },
      cancelRemoveUserClick: () => {
        this.props.showRemoveUserDialog = false;
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
                {{{ ButtonBlock 
                  text="Добавить пользователя"
                  onClick=addUserClick
                  mode="text" 
                  className="button--text header__button"
                }}}
                {{{ ButtonBlock 
                  text="Удалить пользователя"
                  onClick=removeUserClick
                  mode="text" 
                  className="button--text header__button"
                }}}         
                <div class="header__controls"></div>
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
              {{{ AddUserToChatBlock chatId=chat.id}}}
            {{/if}}
            {{#if showRemoveUserDialog}}           
              {{{ RemoveUserFromChatBlock chatId=chat.id}}}
            {{/if}}
        </div>
        `;
  }
}
