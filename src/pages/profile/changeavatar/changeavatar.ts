import "./changeavatar.css";
import { Block } from "../../../core";
import { required } from "../../../modules/validation/common";
import { ValidationResult } from "../../../modules/validation/types";
import { changeAvatar } from "../../../controllers/user";
import { withUser } from "../../../core/hoc";

type ProfilePageProps = {
  user: User | null;
};
class ChangeAvatarPage extends Block {
  static componentName = "ChangeAvatarPage";
  constructor(props: ProfilePageProps) {
    const onChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target && target.files?.length) {
        this.state.values[target.name] = target.files[0];
      }
    };

    const onSubmit = (e: Event) => {
      if (this.validate()) {
        changeAvatar(this.state.values);
      }
      e.preventDefault();
    };
    super({
      ...props,
      events: {
        change: onChange,
        submit: onSubmit,
      },
    });
  }
  validate(): boolean {
    return Object.values(
      this.state.validators as () => ValidationResult[]
    ).reduce((prev: boolean, cur: () => ValidationResult) => {
      return prev && cur().isSuccess;
    }, true);
  }

  protected getStateFromProps(): void {
    this.state = {
      values: {
        avatar: "",
      },
      errors: {
        avatar: "",
      },
      validators: {
        avatar: () => {
          const validationResult = required(this.state.values.avatar);
          if (validationResult.isFailure) {
            this.state.errors.avatar = "Задайте аватар.";
          } else {
            this.state.errors.avatar = "";
          }
          this.setState(this.state);
          return validationResult;
        },
      },
    };
  }
  protected render(): string {
    const { values, errors } = this.state;
    return ` 
        <div class="container">
            <div class="profile__avatar">
                {{{ AvatarBlock src=user.avatar }}}
            </div>
            <div class="profile__properies">
              <form class="form form--vertical" enctype="multipart/form-data">
                  {{{ InputBlock                      
                      name="avatar"                     
                      type="file"
                      accept=".png"
                      value="${values.avatar}"             
                      error="${errors.avatar}"
                      className="form__field"
                  }}}                 
                  {{{ ButtonBlock 
                      text="Поменять" 
                      mode="primary"                     
                      onClick=onSubmit
                      className="form__field"
                  }}}                 
              </form>                
            </div>    
        </div>   
        `;
  }
}

export default withUser(ChangeAvatarPage);
