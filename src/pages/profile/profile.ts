import "./profile.css";
import { Block } from "../../core";
import { logout } from "../../controllers/auth";

type ProfilePageProps = {
  onLogout?: () => void;
};
export class ProfilePage extends Block {
  constructor(props: ProfilePageProps) {
    const onLogout = (e: Event) => {
      logout();
      e.preventDefault();
    };

    super({ ...props });

    this.setProps({
      onLogout: onLogout,
    });
  }
  protected render(): string {
    return ` 
    <div class="container">
      <div class="profile__avatar">
        <a href="/profile/changeavatar">{{{ AvatarBlock }}}</a>      
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
                to='/profile/changedata' 
                text="Изменить данные"
              }}}                           
            </div>
            <div class="profile__controls-item">
              {{{ LinkBlock 
                to='/profile/changepassword' 
                text="Изменить пароль"
              }}}              
            </div>
            <div class="profile__controls-item">
            {{{ ButtonBlock               
              text="Выйти"
              mode="text" 
              onClick=onLogout
            }}}              
          </div>
          </div>
        </div>
      </div>    
    </div>
        `;
  }
}
