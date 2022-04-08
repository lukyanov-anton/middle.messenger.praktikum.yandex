import "./changedata.css";
import { Block } from "../../../core";
import {
  validateEmail,
  validateLogin,
  validateName,
  validatePhone,
} from "../../../modules/validation";
import { required } from "../../../modules/validation/common";

export class ChangeDataPage extends Block {
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
      console.log("/changedata", this.state.values);
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
        email: "",
        login: "",
        first_name: "",
        second_name: "",
        display_name: "",
        phone: "",
      },
      errors: {
        email: "",
        login: "",
        first_name: "",
        second_name: "",
        display_name: "",
        phone: "",
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
        },
        login: () => {
          const validationResult = validateLogin(this.state.values.login);
          if (validationResult.isFailure) {
            this.state.errors.login = validationResult.error;
          } else {
            this.state.errors.login = "";
          }
          this.setState(this.state);
        },
        first_name: () => {
          const nextSate = { ...this.state };
          const validationResult = validateName(this.state.values.first_name);
          if (validationResult.isFailure) {
            nextSate.errors.first_name = validationResult.error;
          } else {
            nextSate.errors.first_name = "";
          }
          this.setState(nextSate);
        },
        second_name: () => {
          const nextSate = { ...this.state };
          const validationResult = validateName(this.state.values.second_name);
          if (validationResult.isFailure) {
            nextSate.errors.second_name = validationResult.error;
          } else {
            nextSate.errors.second_name = "";
          }
          this.setState(nextSate);
        },
        display_name: () => {
          const nextSate = { ...this.state };
          const validationResult = required(this.state.values.display_name);
          if (validationResult.isFailure) {
            nextSate.errors.display_name = "Укажите имя в чате.";
          } else {
            nextSate.errors.display_name = "";
          }
          this.setState(nextSate);
        },
        phone: () => {
          const nextSate = { ...this.state };
          const validationResult = validatePhone(this.state.values.phone);
          if (validationResult.isFailure) {
            nextSate.errors.phone = validationResult.error;
          } else {
            nextSate.errors.phone = "";
          }
          this.setState(nextSate);
        },
      },
    };
  }
  protected render(): string {
    const { values, errors } = this.state;
    return `  
        <div class="container">
            <div class="profile__avatar">
                <a href="changeavatar.html">{{{ AvatarBlock }}}</a>      
            </div>
            <div class="profile__properies">
                <form class="form form--vertical">
                    {{{ InputBlock 
                        placeholder="Почта" 
                        name="email"
                        ref="email"
                        type="email"
                        value="${values.email}"
                        error="${errors.email}"
                        className ="form__field" 
                    }}}
                    {{{ InputBlock 
                        placeholder="Логин" 
                        name="login" 
                        ref="login"
                        type="text"
                        value="${values.login}"
                        error="${errors.login}" 
                        className ="form__field"
                    }}}
                    {{{ InputBlock 
                        placeholder="Имя" 
                        name="first_name" 
                        ref="first_name"
                        type="text" 
                        value="${values.first_name}"
                        error="${errors.first_name}"
                        className ="form__field"
                    }}}
                    {{{ InputBlock 
                        placeholder="Фамилия" 
                        name="second_name" 
                        ref="second_name"
                        type="text" 
                        value="${values.second_name}"
                        error="${errors.second_name}"
                        className="form__field"
                    }}}
                    {{{ InputBlock 
                        placeholder="Имя в чате"
                        name="display_name"
                        ref="display_name" 
                        type="text" 
                        value="${values.display_name}"
                        error="${errors.display_name}"
                        className="form__field"
                    }}}
                    {{{ InputBlock 
                        placeholder="Телефон" 
                        name="phone"
                        ref="phone"  
                        type="tel" 
                        value="${values.phone}"
                        error="${errors.phone}"
                        className="form__field"
                    }}}                    
                    {{{ ButtonBlock 
                        text="Сохранить" 
                        mode="primary" 
                        onClick=onSubmit 
                        className="form__field"}}}       
                </form>                
            </div>    
        </div>`;
  }
}