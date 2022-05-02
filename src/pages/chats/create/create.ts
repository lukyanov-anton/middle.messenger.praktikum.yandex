import { Block } from "../../../core";

import { ValidationResult } from "../../../modules/validation/types";
import { required } from "../../../modules/validation/common";
import { createChat } from "../../../controllers/chats";

export class ChatCreatePage extends Block {
  static componentName = "ChatCreatePage";
  constructor() {
    const onChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target) {
        this.state.values[target.name] = target.value;
      }
    };

    const onSubmit = async (e: Event) => {
      if (this.validate()) {
        await createChat(this.state.values.title);
      }
      e.preventDefault();
    };
    super({
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
        title: "",
      },
      errors: {
        title: "",
      },
      validators: {
        title: () => {
          const nextSate = { ...this.state };
          const validationResult = required(this.state.values.title);
          if (validationResult.isFailure) {
            nextSate.errors.title = validationResult.error;
          } else {
            nextSate.errors.title = "";
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
        <div class="container">           
            <div>
                <form class="form form--vertical">
                    {{{ InputBlock
                        placeholder="Название чата" 
                        name="title"
                        type="text"
                        value="${values.title}"
                        error="${errors.title}"
                        className="form__field"
                    }}}
                    {{{ ButtonBlock 
                        text="Создать" 
                        mode="primary" 
                        onClick=onSubmit
                        className="form__field"
                    }}}       
                </form>          
            </div>    
        </div>`;
  }
}
