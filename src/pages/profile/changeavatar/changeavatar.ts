import "./changeavatar.css";
import { Block } from "../../../core";
import { required } from "../../../modules/validation/common";

export class ChangeAvatarPage extends Block {
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
      console.log("/changeavatar", this.state.values);
      e.preventDefault();
    };
    super({
      events: {
        input: onChange,
        change: onChange,
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
        avatar: "",
      },
      errors: {
        avatar: "",
      },
      validators: {
        avatar: () => {
          const validationResult = required(this.state.values.avatar);
          if (validationResult.isFailure) {
            this.state.errors.avatar = "Задайте автатар.";
          } else {
            this.state.errors.avatar = "";
          }
          this.setState(this.state);
        },
      },
    };
  }
  protected render(): string {
    const { values, errors } = this.state;
    return ` 
        <div class="container">
            <div class="profile__avatar">
                {{{ AvatarBlock }}}
            </div>
            <div class="profile__properies">
              <form class="form form--vertical">
                  {{{ InputBlock                      
                      name="avatar"                     
                      type="file"
                      accept=".png"                      
                      error="${errors.avatar}"
                      className="form__field"
                  }}}                 
                  {{{ ButtonBlock 
                      text="Поменять" 
                      mode="primary"                     
                      onClick=onSubmit
                      className="form__field"
                  }}}                 
              </form>                
            </div>    
        </div>   
        `;
  }
}
