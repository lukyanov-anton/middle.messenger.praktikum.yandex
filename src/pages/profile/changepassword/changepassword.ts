import "./changepassword.css";
import { Block } from "../../../core";
import { validatePassword } from "../../../modules/validation";
import { changePassword } from "../../../controllers/user";
import { ValidationResult } from "../../../modules/validation/types";

export class ChangePasswordPage extends Block {
  static componentName = "ChangePasswordPage";
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
      if (this.validate()) {
        changePassword(this.state.values);
      }
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
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
      errors: {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
      validators: {
        oldPassword: () => {
          const nextSate = { ...this.state };
          const validationResult = validatePassword(
            this.state.values.oldPassword
          );
          if (validationResult.isFailure) {
            nextSate.errors.oldPassword = validationResult.error;
          } else {
            nextSate.errors.oldPassword = "";
          }
          this.setState(nextSate);
          return validationResult;
        },
        newPassword: () => {
          const nextSate = { ...this.state };
          const validationResult = validatePassword(
            this.state.values.newPassword
          );
          if (validationResult.isFailure) {
            nextSate.errors.newPassword = validationResult.error;
          } else {
            nextSate.errors.newPassword = "";
          }
          this.setState(nextSate);
          return validationResult;
        },
        confirmNewPassword: () => {
          const nextSate = { ...this.state };
          const validationResult = validatePassword(
            this.state.values.confirmNewPassword
          );
          if (validationResult.isFailure) {
            nextSate.errors.confirmNewPassword = validationResult.error;
          } else {
            nextSate.errors.confirmNewPassword = "";
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
            <div class="profile__avatar">
                <a href="/profile/changeavatar">{{{ AvatarBlock }}}</a>      
            </div>
            <div class="profile__properies">
                <form class="form form--vertical">
                    {{{ InputBlock
                        placeholder="Старый пароль" 
                        name="oldPassword" 
                        ref="oldPassword" 
                        type="password"
                        value="${values.oldPassword}"
                        error="${errors.oldPassword}"
                        className="form__field"
                    }}}
                    {{{ InputBlock 
                        placeholder="Новый пароль" 
                        name="newPassword" 
                        ref="newPassword"
                        type="password"
                        value="${values.newPassword}"
                        error="${errors.newPassword}"
                        className="form__field"
                    }}}
                    {{{ InputBlock
                        placeholder="Повторите новый пароль"
                        name="confirmNewPassword"
                        ref="confirmNewPassword" 
                        type="password"
                        value="${values.confirmNewPassword}"
                        error="${errors.confirmNewPassword}"
                        className="form__field"
                    }}}
                    {{{ ButtonBlock 
                        text="Сохранить" 
                        mode="primary" 
                        onClick=onSubmit
                        className="form__field"
                    }}}       
                </form>          
            </div>    
        </div>`;
  }
}
