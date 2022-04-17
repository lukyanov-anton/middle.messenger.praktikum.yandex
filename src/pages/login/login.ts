import "./login.css";
import { Block } from "../../core";
import { validatePassword, validateLogin } from "../../modules/validation";
import { withRouter } from "../../core/hoc/withRouter";
import { isNamedInput } from "../../utils";

class LoginPage extends Block {
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
        //this.setState(this.state); //todo Если изменять state это приведет к перерендеру компонента и потере фокуса
      }
    };
    const onSubmit = (e: Event) => {
      this.validate();
      console.log("/login", this.state.values);
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
        login: "",
        password: "",
      },
      errors: {
        login: "",
        password: "",
      },
      validators: {
        login: () => {
          const validationResult = validateLogin(this.state.values.login);
          if (validationResult.isFailure) {
            this.state.errors.login = validationResult.error;
          } else {
            this.state.errors.login = "";
          }
          this.setState(this.state);
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
        },
      },
    };
  }
  protected render(): string {
    const { values, errors } = this.state;
    return `  
        <main class="container" > 
            <div class='card'>
                <header class="card__header">
                <p class="card__title">Вход</p>
                </header>
                <div class="card__content">                
                    <form class="form form--vertical login-page__form">
                        {{{ InputBlock 
                            label="Логин" 
                            name="login" 
                            ref="login"
                            placeholder="Логин" 
                            type="text"
                            value="${values.login}"
                            error="${errors.login}"                            
                            className="form__field"
                        }}}
                        {{{ InputBlock 
                            label="Пароль" 
                            name="password" 
                            ref="password"
                            placeholder="Пароль" 
                            type="password"
                            value="${values.password}"
                            error="${errors.password}"
                            className="form__field"
                        }}}
                        {{{ ButtonBlock 
                            text="Войти" 
                            mode="primary" 
                            onClick=onSubmit
                            className="form__field"
                        }}}       
                        <div class="login-page__link">
                            {{{ LinkBlock 
                                to='/signin' 
                                text="Ещё не зарегистрированы?"
                            }}}
                        </div>
                    </form>
                </div>    
            </div>
        </main>
        `;
  }
}

export default withRouter(LoginPage);
