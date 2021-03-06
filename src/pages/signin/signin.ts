import "./signin.css";
import { Block } from "../../core";
import {
  validatePassword,
  validateLogin,
  validatePhone,
  validateEmail,
  validateName,
} from "../../modules/validation";
import { isNamedInput } from "../../utils";
import { withRouter } from "../../core/hoc/withRouter";
import { ValidationResult } from "../../modules/validation/types";
import { register } from "../../controllers/auth";

class SigninPage extends Block {
  static componentName = "SigninPage";
  constructor() {
    const onChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target) {
        this.state.values[target.name] = target.value;
      }
    };
    const onBlur = (e: Event) => {
      if (isNamedInput(e.target)) {
        this.state.validators[e.target.name]();
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
        register(this.state.values);
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
        email: "",
        login: "",
        first_name: "",
        second_name: "",
        phone: "",
        password: "",
        password_confirm: "",
      },
      errors: {
        email: "",
        login: "",
        first_name: "",
        second_name: "",
        phone: "",
        password: "",
        password_confirm: "",
      },
      validators: {
        email: () => {
          const validationResult = validateEmail(this.state.values.email);
          if (validationResult.isFailure) {
            this.state.errors.email = validationResult.error;
          } else {
            this.state.errors.email = "";
          }
          this.setState(this.state);
          return validationResult;
        },
        login: () => {
          const validationResult = validateLogin(this.state.values.login);
          if (validationResult.isFailure) {
            this.state.errors.login = validationResult.error;
          } else {
            this.state.errors.login = "";
          }
          this.setState(this.state);
          return validationResult;
        },
        first_name: () => {
          const validationResult = validateName(this.state.values.first_name);
          if (validationResult.isFailure) {
            this.state.errors.first_name = validationResult.error;
          } else {
            this.state.errors.first_name = "";
          }
          this.setState(this.state);
          return validationResult;
        },
        second_name: () => {
          const validationResult = validateName(this.state.values.second_name);
          if (validationResult.isFailure) {
            this.state.errors.second_name = validationResult.error;
          } else {
            this.state.errors.second_name = "";
          }
          this.setState(this.state);
          return validationResult;
        },
        phone: () => {
          const validationResult = validatePhone(this.state.values.phone);
          if (validationResult.isFailure) {
            this.state.errors.phone = validationResult.error;
          } else {
            this.state.errors.phone = "";
          }
          this.setState(this.state);
          return validationResult;
        },
        password: () => {
          const nextSate = { ...this.state };
          const validationResult = validatePassword(this.state.values.password);
          if (validationResult.isFailure) {
            nextSate.errors.password = validationResult.error;
          } else {
            nextSate.errors.password = "";
          }
          this.setState(nextSate);
          return validationResult;
        },
        password_confirm: () => {
          const nextSate = { ...this.state };
          const validationResult = validatePassword(
            this.state.values.password_confirm
          );
          if (validationResult.isFailure) {
            nextSate.errors.password_confirm = validationResult.error;
          } else {
            nextSate.errors.password_confirm = "";
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
        <main class="container"> 
            <div class='card'>
                <header class="card__header">
                <p class="card__title">??????????????????????</p>
                </header>
                <div class="card__content">
                    <form class='form form--vertical signin-page__form'>
                        {{{ InputBlock 
                            label="??????????" 
                            name="email"
                            ref="email" 
                            type="email" 
                            placeholder="??????????"
                            value="${values.email}"
                            error="${errors.email}"
                            className="form__field"
                        }}}
                        {{{ InputBlock 
                            label="??????????" 
                            name="login"
                            ref="login"  
                            type="text" 
                            placeholder="??????????"
                            value="${values.login}"
                            error="${errors.login}"
                            className="form__field"
                        }}}
                        {{{ InputBlock 
                            label="??????" 
                            name="first_name"
                            ref="first_name" 
                            type="text" 
                            placeholder="??????"
                            value="${values.first_name}"
                            error="${errors.first_name}"
                            className="form__field"
                        }}}
                        {{{ InputBlock 
                            label="??????????????" 
                            name="second_name" 
                            ref="second_name"
                            type="text" 
                            placeholder="??????????????"
                            value="${values.second_name}"
                            error="${errors.second_name}"
                            className="form__field"
                        }}}
                        {{{ InputBlock 
                            label="??????????????" 
                            name="phone"
                            ref="phone" 
                            type="tel" 
                            placeholder="??????????????"
                            value="${values.phone}"
                            error="${errors.phone}"
                            className="form__field"
                        }}}
                        {{{ InputBlock 
                            label="????????????" 
                            name="password"
                            ref="password" 
                            type="password" 
                            placeholder="????????????"
                            value="${values.password}"
                            error="${errors.password}"
                            className="form__field"
                        }}}
                        {{{ InputBlock 
                            label="???????????? (?????? ??????)"
                            name="password_confirm" 
                            ref="password_confirm"
                            type="password" 
                            placeholder="???????????? (?????? ??????)"
                            value="${values.password_confirm}"
                            error="${errors.password_confirm}"
                            className="form__field"
                        }}}
                        {{{ ButtonBlock 
                            text="????????????????????????????????????" 
                            mode="primary" 
                            onClick=onSubmit
                            className="form__field"
                        }}}
                        <div class="signin-page__link">                  
                            {{{ LinkBlock 
                              to='/login' 
                              text="??????????"}}}
                        </div>
                    </form> 
                </div>    
            </div>
        </main>
        `;
  }
}
export default withRouter(SigninPage);
