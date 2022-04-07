import "./newMessage.css";
import { Block } from "../../../../../core";
import { required } from "../../../../../modules/validation/common";

export class NewMessage extends Block {
  constructor() {
    const onChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target) {
        this.state.values[target.name] = target.value;
      }
    };
    const onBlur = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target) {
        this.state.validators[target.name]();
      }
    };
    const onFocus = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target) {
        this.state.errors[target.name] = "";
      }
    };
    const onSubmit = (e: Event) => {
      this.validate();
      console.log("/newmessage", this.state.values);
      e.preventDefault();
    };
    super({
      events: {
        input: onChange,
        focusin: onFocus,
        focusout: onBlur,
        submit: onSubmit,
      },
    });
  }
  validate() {
    Object.values(this.state.validators).forEach((value) => {
      (value as () => void)();
    });
  }
  protected getStateFromProps(): void {
    this.state = {
      values: {
        massage: "",
      },
      errors: {
        message: "",
      },
      validators: {
        message: () => {
          const validationResult = required(this.state.values.message);
          if (validationResult.isFailure) {
            this.state.errors.message = validationResult.error;
          } else {
            this.state.errors.message = "Напишите сообщение";
          }
          this.setState(this.state);
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
                onBlur=onBlur
            }}}
            {{{ ButtonBlock 
                text="Ок"
                mode="primary" 
                onClick=onMessageSubmit
                className='new-message__button'
            }}}   
        </form>
        `;
  }
}
