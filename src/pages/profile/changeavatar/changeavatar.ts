import { Block } from "../../../core";

export class ChangeAvatarPage extends Block{
  protected render(): string {
    return ` 
        <div class="container">
            <div class="profile__avatar">
                {{{ Avatar }}}
            </div>
            <div class="profile__properies">
            <form class="form form--vertical">
                {{{ Input label="Выбрать файл на компьютере" name="avatar" type="file"}}}            
                {{{ Button text="Поменять" mode="primary" }}}       
            </form>                
            </div>    
        </div>   
        `;        
  }
}