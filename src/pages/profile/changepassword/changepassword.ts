import './changepassword.css';
import { Block } from "../../../core";
import { validatePassword } from '../../../modules/validation';

type ChangePasswordData={    
    oldPassword:string,
    newPassword:string,
    confirmNewPassword:string
}

export class ChangePasswordPage extends Block{
    validate(changePasswordData:ChangePasswordData){      
        const nextSate={
            errors:{                
                oldPassword:'',
                newPassword:'',
                confirmNewPassword:''
            },
            values:{...changePasswordData}
        }
        let validationResult = validatePassword(changePasswordData.oldPassword);
        if(validationResult.isFailure){
            nextSate.errors.oldPassword=validationResult.error!;
        }
        validationResult = validatePassword(changePasswordData.newPassword);
        if(validationResult.isFailure){
            nextSate.errors.newPassword=validationResult.error!;
        }
        validationResult = validatePassword(changePasswordData.confirmNewPassword);
        if(validationResult.isFailure){
            nextSate.errors.confirmNewPassword=validationResult.error!;
        }

        this.setState(nextSate);
    }
    getData():ChangePasswordData{
        const changePasswordData={
            oldPassword:(this.refs.oldPassword.firstElementChild as HTMLInputElement).value,
            newPassword:(this.refs.newPassword.firstElementChild as HTMLInputElement).value,
            confirmNewPassword:(this.refs.confirmNewPassword.firstElementChild as HTMLInputElement).value,
        };
        return changePasswordData;
    }
    protected getStateFromProps(): void {
        this.state={
            values:{
                oldPassword:'',
                newPassword:'',
                confirmNewPassword:''
            },
            errors:{
                oldPassword:'',
                newPassword:'',
                confirmNewPassword:''
            },           
            onBlur:()=>{
                console.log("onBlur");
                const changePasswordData=this.getData();
                this.validate(changePasswordData);
            },
            onSubmit:(e:Event)=>{ 
                const changePasswordData=this.getData();
                this.validate(changePasswordData);
                console.log('/changepassword', changePasswordData);
                e.preventDefault();                 
            }            
        };
    }
    
    protected render(): string {
        const {values,errors}=this.state;
        return `  
        <div class="container">
            <div class="profile__avatar">
                <a href="changeavatar.html">{{{ Avatar }}}</a>      
            </div>
            <div class="profile__properies">
                <form class="form form--vertical">
                    {{{ InputBlock
                        placeholder="Старый пароль" 
                        name="oldPassword" 
                        ref="oldPassword" 
                        type="password"
                        value="${values.oldPassword}"
                        error="${errors.oldPassword}"
                        className="form__field"
                    }}}
                    {{{ InputBlock 
                        placeholder="Новый пароль" 
                        name="newPassword" 
                        ref="newPassword"
                        type="password"
                        value="${values.newPassword}"
                        error="${errors.newPassword}"
                        className="form__field"
                    }}}
                    {{{ InputBlock
                        placeholder="Повторите новый пароль"
                        name="confirmNewPassword"
                        ref="confirmNewPassword" 
                        type="password"
                        value="${values.confirmNewPassword}"
                        error="${errors.confirmNewPassword}"
                        className="form__field"
                    }}}
                    {{{ Button text="Сохранить" mode="primary" onClick=onSubmit}}}       
                </form>          
            </div>    
        </div>`;        
    }
}