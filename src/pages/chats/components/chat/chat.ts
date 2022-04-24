import "./chat.css";
import { Block } from "../../../../core";
import { DailyMessages } from "../../../../models/chat";
import { ChatsStub } from "../../../../models/chat/stub";

interface ChatBlockProps {
  id: number;
  title: string;
  avatar: string;
  messages: DailyMessages[];
  showAddUserDialog: boolean;
  showRemoveUserDialog: boolean;
  addUserClick: () => void;
  cancelAddUserClick: () => void;
  removeUserClick: () => void;
  cancelRemoveUserClick: () => void;
}

export class ChatBlock extends Block<ChatBlockProps> {
  constructor(props: ChatBlockProps) {
    const { id: chatId } = props;
    const chat = ChatsStub.find((chat) => chat.id == chatId);
    super({ ...props, ...chat });
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
                <h1 class="header__title">{{title}}</h1>
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
                {{{ NewMessage }}}
            </footer>
            {{#if showAddUserDialog}}           
              {{{ AddUserToChatBlock chatId=id}}}
            {{/if}}
            {{#if showRemoveUserDialog}}           
              {{{ RemoveUserFromChatBlock chatId=id}}}
            {{/if}}
        </div>
        `;
  }
}
