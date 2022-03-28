import { Block } from "../../core";

import './login.css';
import '../../styles/form.css'
export class LoginPage extends Block{
    protected render(): string {
        return `  
        {{# BaseLayout}}          
            <form class="form form--vertical login-page__form">
                {{{ Input label="Логин" name="login" type="text" value="macho"}}}
                {{{ Input label="Пароль" name="password" type="password"}}}
                {{{ Button text="Войти" mode="primary" }}}       
                <div class="login-page__link">
                {{{ Link to='../../signin/signin.hbs' text="Ещё не зарегистрированы?"}}}
                </div>
            </form>
        {{/BaseLayout}}
        `;
        
    }
}