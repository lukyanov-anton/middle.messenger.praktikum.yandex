import "./removeUser.css";
import { Block } from "../../../../../core";
import { removeUserFromChat } from "../../../../../controllers/chat";
import { ValidationResult } from "../../../../../modules/validation/types";
import { required } from "../../../../../modules/validation/common";

interface RemoveUserFromChatProps {
  chatId: number;
}

export class RemoveUserFromChatBlock extends Block {
  static componentName = "RemoveUserFromChatBlock";
  constructor(props: RemoveUserFromChatProps) {
    const onChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target) {
        this.state.values[target.name] = target.value;
      }
    };
    const onSubmit = (e: Event) => {
      if (this.validate()) {
        removeUserFromChat(this.state.values.login, this.props.chatId);
      }
      e.preventDefault();
    };
    super({
      ...props,
      events: {
        input: onChange,
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
        login: "",
      },
      errors: {
        login: "",
      },
      validators: {
        login: () => {
          const nextSate = { ...this.state };
          const validationResult = required(this.state.values.login);
          if (validationResult.isFailure) {
            nextSate.errors.login = validationResult.error;
          } else {
            nextSate.errors.login = "";
          }
          this.setState(nextSate);
          return validationResult;
        },
      },
    };
  }

  protected render(): string {
    const { values, errors } = this.state;
    return `  
        <dialog open class="dialog">           
            <div>
                <h2>Удалить пользователя</h2>
                <form class="form form--vertical">
                    {{{ InputBlock
                        placeholder="Логин" 
                        name="login"
                        type="text"
                        value="${values.login}"
                        error="${errors.login}"
                        className="form__field"
                    }}}
                    {{{ ButtonBlock 
                        text="Удалить" 
                        mode="primary" 
                        onClick=onSubmit
                        className="form__field"
                    }}}       
                </form>          
            </div>    
        </dialog>`;
  }
}
