import "./login.css";
import { Block } from "../../core";
import { validatePassword, validateLogin } from "../../modules/validation";

type LoginData = {
  login: string;
  password: string;
};

export class LoginPage extends Block {
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
        //this.setState(this.state);
      }
    };
    const onSubmit = (e: Event) => {
      const loginData = { ...this.state.values };
      this.validate(loginData);
      console.log("/login", loginData);
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
  validate(loginData: LoginData) {
    Object.values(this.state.validators).forEach((value) => {
      value();
    });

    /* const nextSate = {
      errors: {
        login: "",
        password: "",
      },
      values: { ...loginData },
    };
    let validationResult = validateLogin(loginData.login);
    if (validationResult.isFailure) {
      nextSate.errors.login = validationResult.error!;
    }
    validationResult = validatePassword(loginData.password);
    if (validationResult.isFailure) {
      nextSate.errors.password = validationResult.error!;
    }
    this.setState(nextSate); */
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
          /*  const nextSate = { ...this.state };
          const validationResult = validateLogin(this.state.values.login);
          if (validationResult.isFailure) {
            nextSate.errors.login = validationResult.error!;
          } else {
            nextSate.errors.login = "";
          }
          this.setState(nextSate); */
          const validationResult = validateLogin(this.state.values.login);
          if (validationResult.isFailure) {
            this.state.errors.login = validationResult.error!;
          } else {
            this.state.errors.login = "";
          }
          this.setState(this.state);
        },
        password: () => {
          const nextSate = { ...this.state };
          const validationResult = validatePassword(this.state.values.password);
          if (validationResult.isFailure) {
            nextSate.errors.password = validationResult.error!;
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
                        {{{ Button 
                            text="Войти" 
                            mode="primary" 
                            onClick=onSubmit
                            className="form__field"
                        }}}       
                        <div class="login-page__link">
                            {{{ 
                                Link to='./signin.html' 
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
