import { Block } from "../../../core";

import './changedata.css';

export class ChangeDataPage extends Block{
    
    protected render(): string {
        return `  
        <div class="container">
            <div class="profile__avatar">
                <a href="changeavatar.html">{{{ Avatar }}}</a>      
            </div>
            <div class="profile__properies">
                <form class="form form--vertical">
                    {{{ Input label="Почта" name="email" type="email"}}}
                    {{{ Input label="Логин" name="login" type="text"}}}
                    {{{ Input label="Имя" name="first_name" type="text"}}}
                    {{{ Input label="Фамилия" name="second_name" type="text"}}}
                    {{{ Input label="Имя в чате" name="display_name" type="text"}}}
                    {{{ Input label="Телефон" name="phone" type="tel"}}}                    
                    {{{ Button text="Сохранить" mode="primary"}}}       
                </form>                
            </div>    
        </div>`;        
    }
}