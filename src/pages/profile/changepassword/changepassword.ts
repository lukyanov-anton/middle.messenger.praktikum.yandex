import { Block } from "../../../core";

import './changepassword.css';

export class ChangePasswordPage extends Block{
    
    protected render(): string {
        return `  
        <div class="container">
            <div class="profile__avatar">
                <a href="changeavatar.html">{{{ Avatar }}}</a>      
            </div>
            <div class="profile__properies">
                <form class="form form--vertical">
                    {{{ Input label="Старый пароль" name="oldPassword" type="password"}}}
                    {{{ Input label="Новый пароль" name="newPassword" type="password"}}}
                    {{{ Input label="Повторите новый пароль" name="confirmNewPassword" type="password"}}}
                    {{{ Button text="Сохранить" mode="primary"}}}       
                </form>          
            </div>    
        </div>`;        
    }
}