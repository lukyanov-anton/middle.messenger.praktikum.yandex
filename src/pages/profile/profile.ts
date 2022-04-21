import "./profile.css";
import { Block } from "../../core";
import { logout } from "../../controllers/auth";
import { withUser } from "../../core/hoc";

type ProfilePageProps = {
  user: User | null;
  onLogout?: () => void;
};
class ProfilePage extends Block {
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
            value = user.email
          }}}
          {{{ PropertyBlock 
            label="Логин" 
            value = user.login
          }}}
          {{{ PropertyBlock 
            label="Имя" 
            value = user.firstName
          }}}
          {{{ PropertyBlock 
            label="Фамилия" 
            value = user.secondName
          }}}
          {{{ PropertyBlock 
            label="Имя в чате" 
            value = user.firstName
          }}}
          {{{ PropertyBlock 
            label="Телефон" 
            value = user.phone
          }}}
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

export default withUser(ProfilePage);
