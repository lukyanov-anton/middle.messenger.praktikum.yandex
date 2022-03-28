import { Block } from "../../core";

import './signin.css';

export class SigninPage extends Block{
    protected render(): string {
        return `  
        <main class="container"> 
            <div class='card'>
                <header class="card__header">
                <p class="card__title">Регистрация</p>
                </header>
                <div class="card__content">
                    <form class='form form--vertical signin-page__form'>
                        {{{ Input label="Почта" name="email" type="email"}}}
                        {{{ Input label="Логин" name="login" type="text"}}}
                        {{{ Input label="Имя" name="first_name" type="text"}}}
                        {{{ Input label="Фамилия" name="second_name" type="text"}}}
                        {{{ Input label="Телефон" name="phone" type="tel"}}}
                        {{{ Input label="Пароль" name="password" type="password"}}}
                        {{{ Input label="Пароль (еще раз)" name="password_confirm" type="password"}}}
                        {{{ Button text="Зарегистрироваться" mode="primary" }}}       
                        
                        <div class="signin-page__link">                  
                            {{{ Link to='./login.html' text="Войти"}}}
                        </div>
                    </form> 
                </div>    
            </div>
        </main>
        `;        
    }
}