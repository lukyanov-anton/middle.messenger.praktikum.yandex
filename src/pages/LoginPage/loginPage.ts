import { Block } from "../../core";

import './loginPage.css';

export class LoginPage extends Block{
    protected render(): string {
        return `  
        <main class="container"> 
            <div class='card'>
                <header class="card__header">
                <p class="card__title">Вход</p>
                </header>
                <div class="card__content">
                    <form class="form form--vertical login-page__form">
                        {{{ Input label="Логин" name="login" type="text" value="macho"}}}
                        {{{ Input label="Пароль" name="password" type="password"}}}
                        {{{ Button text="Войти" mode="primary" }}}       
                        <div class="login-page__link">
                            {{{ Link to='../../signin/signin.hbs' text="Ещё не зарегистрированы?"}}}
                        </div>
                    </form>
                </div>    
            </div>
        </main>
        `;        
    }
}