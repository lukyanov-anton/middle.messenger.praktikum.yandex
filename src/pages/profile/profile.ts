import "./profile.css";
import { Block } from "../../core";

export class ProfilePage extends Block {
  protected render(): string {
    return ` 
    <div class="container">
      <div class="profile__avatar">
        <a href="changeavatar.html">{{{ AvatarBlock }}}</a>      
      </div>
      <div class="profile__properies">
        <div class="profile">
          <div class="profile__data">
          {{{ PropertyBlock 
            label="Почта" 
            value = "macho@yandex.ru"
          }}}
          {{{ PropertyBlock 
            label="Логин" 
            value = "macho"
          }}}
          {{{ PropertyBlock 
            label="Имя" 
            value = "Иван"
          }}}
          {{{ PropertyBlock 
            label="Фамилия" 
            value = "Иванов"
          }}}
          {{{ PropertyBlock 
            label="Имя в чате" 
            value = "macho"
          }}}
          {{{ PropertyBlock 
            label="Телефон" 
            value = "+7 (913) 222 111"}}}
          </div>
          <div class="profile__controls">
            <div class="profile__controls-item">
              {{{ LinkBlock 
                to='changedata.html' 
                text="Изменить данные"
              }}}                           
            </div>
            <div class="profile__controls-item">
              {{{ LinkBlock 
                to='changepassword.html' 
                text="Изменить пароль"
              }}}              
            </div>
          </div>
        </div>
      </div>    
    </div>
        `;
  }
}
