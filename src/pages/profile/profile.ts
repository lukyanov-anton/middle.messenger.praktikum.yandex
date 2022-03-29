import { Block } from "../../core";

import './profile.css';

export class ProfilePage extends Block{
  protected render(): string {
    return ` 
    <div class="container">
      <div class="profile__avatar">
        <a href="changeavatar/changeavatar.html">{{{ Avatar }}}</a>      
      </div>
      <div class="profile__properies">
        <div class="profile">
          <div class="profile__data">
          {{{ Property label="Почта" value = "macho@yandex.ru"}}}
          {{{ Property label="Логин" value = "macho"}}}
          {{{ Property label="Имя" value = "Иван"}}}
          {{{ Property label="Фамилия" value = "Иванов"}}}
          {{{ Property label="Имя в чате" value = "macho"}}}
          {{{ Property label="Телефон" value = "+7 (913) 222 111"}}}
          </div>
          <div class="profile__controls">
            <div class="profile__controls-item">
              {{{ Link to='changedata/changedata.html' text="Изменить данные"}}}                           
            </div>
            <div class="profile__controls-item">
              {{{ Link to='changedata/changepassword.html' text="Изменить пароль"}}}              
            </div>
          </div>
        </div>
      </div>    
    </div>
        `;       
  }
}