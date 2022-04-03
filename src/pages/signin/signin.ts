import './signin.css';
import { Block } from "../../core";



type SignData={
    login:string,
    password:string
}

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
                        {{{ InputBlock label="Почта" name="email" type="email" placeholder="Почта"}}}
                        {{{ InputBlock label="Логин" name="login" type="text" placeholder="Почта"}}}
                        {{{ InputBlock label="Имя" name="first_name" type="text" placeholder="Логин"}}}
                        {{{ InputBlock label="Фамилия" name="second_name" type="text" placeholder="Фамилия"}}}
                        {{{ InputBlock label="Телефон" name="phone" type="tel" placeholder="Телефон"}}}
                        {{{ InputBlock label="Пароль" name="password" type="password" placeholder="Пароль"}}}
                        {{{ InputBlock label="Пароль (еще раз)" name="password_confirm" type="password" placeholder="Пароль (еще раз)"}}}
                        {{{ Button text="Зарегистрироваться" mode="primary" onClick=onSubmit}}}
                        <div class="signin-page__link">                  
                            {{{ Link to='#/login' text="Войти"}}}
                        </div>
                    </form> 
                </div>    
            </div>
        </main>
        `;        
    }
}