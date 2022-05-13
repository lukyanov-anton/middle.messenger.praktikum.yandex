import "./login.css";
import { Block, Store } from "../../core";
import { validatePassword, validateLogin } from "../../modules/validation";
import { withStore, withRouter } from "../../core";
import { isNamedInput } from "../../utils";
import { login } from "../../controllers/auth";
import { Router } from "../../core/router";
import { ValidationResult } from "../../modules/validation/types";

type LoginPageProps = {
  router: Router;
  store: Store<AppState>;
  formError?: () => string | null;
  onLogout?: () => void;
  events: {
    input: (e: Event) => void;
    focusin: (e: Event) => void;
    focusout: (e: Event) => void;
    submit: (e: Event) => void;
  };
};

export class LoginPage extends Block<LoginPageProps> {
  static componentName = "LoginPage";
  constructor(props: LoginPageProps) {
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
      if (this.validate()) {
        login(this.state.values);
      }
      e.preventDefault();
    };

    super({
      ...props,
      events: {
        input: onChange,
        focusin: onFocus,
        focusout: onBlur,
        submit: onSubmit,
      },
    });

    this.setProps({
      formError: () => {
        return this.props.store.getState().formError;
      },
    });
  }

  componentDidMount() {
    if (this.props.store.getState().user) {
      this.props.router.go("/profile");
    }
  }

  validate(): boolean {
    return Object.values(
      this.state.validators as () => ValidationResult[]
    ).reduce((prev: () => ValidationResult, cur: () => ValidationResult) => {
      return prev().isSuccess && cur().isSuccess;
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
        login: (): ValidationResult => {
          const validationResult = validateLogin(this.state.values.login);
          if (validationResult.isFailure) {
            this.state.errors.login = validationResult.error;
          } else {
            this.state.errors.login = "";
          }
          this.setState(this.state);
          return validationResult;
        },
        password: (): ValidationResult => {
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
      },
    };
  }
  protected render(): string {
    const { values, errors } = this.state;
    return `  
          {{#BaseLayout}}
            <div class='card'>
                <header class="card__header">
                <p class="card__title">Вход</p>
                </header>
                <div class="card__content">
                    {{#if isLoading}}{{{LoadingBlock }}}{{/if}}                    
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
                        {{{ErrorBlock value=formError}}}
                    </form>
                </div>    
            </div>
          {{/BaseLayout}}
        `;
  }
}

export default withRouter(withStore(LoginPage));
