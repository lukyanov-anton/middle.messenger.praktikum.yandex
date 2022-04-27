import "./newMessage.css";
import { Block } from "../../../../../core";
import { required } from "../../../../../modules/validation/common";
import { ChatErrors } from "../../../../../modules/validation/errors";
import { ValidationResult } from "../../../../../modules/validation/types";
import { sendMessageToChat } from "../../../../../controllers/chat";

interface NewMessageProps {
  chatId: number;
}

export class NewMessage extends Block {
  static componentName = "NewMessage";
  constructor(props: NewMessageProps) {
    const onChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target) {
        this.state.values[target.name] = target.value;
      }
    };

    const onFocus = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target) {
        this.state.errors[target.name] = "";
      }
    };
    const onSubmit = (e: Event) => {
      if (this.validate()) {
        sendMessageToChat(this.props.chatId, this.state.values.message);
        this.state.values.message = "";
        this.setState(this.state);
      }

      e.preventDefault();
    };
    super({
      ...props,
      events: {
        input: onChange,
        focusin: onFocus,
        submit: onSubmit,
      },
    });
  }
  validate(): boolean {
    return Object.values(
      this.state.validators as () => ValidationResult[]
    ).reduce((prev: boolean, cur: () => ValidationResult) => {
      return prev && cur().isSuccess;
    }, true);
  }
  protected getStateFromProps(): void {
    this.state = {
      values: {
        message: "",
      },
      errors: {
        message: "",
      },
      validators: {
        message: () => {
          const validationResult = required(this.state.values.message);
          if (validationResult.isFailure) {
            this.state.errors.message = ChatErrors.MessageRequired;
          } else {
            this.state.errors.message = "";
          }
          this.setState(this.state);
          return validationResult;
        },
      },
    };
  }
  protected render(): string {
    const { values, errors } = this.state;
    return `
        <form class="new-message" >            
            {{{ ButtonBlock 
                text="Вложение" 
                type='button'               
                onClick=onFileSubmit
                className='new-message__file'
            }}}
            {{{ InputBlock                
                name="message" 
                ref="message"
                type="text" 
                placeholder="Сообщение"
                value="${values.message}"
                error="${errors.message}"
                className="new-message__input"                 
            }}}
            {{{ ButtonBlock 
                text="Ок"
                mode="primary"                 
                className='new-message__button'
                onClick=onSendMessage
            }}}   
        </form>
        `;
  }
}
