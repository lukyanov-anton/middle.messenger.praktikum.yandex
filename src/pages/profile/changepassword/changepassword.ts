import './changepassword.css';
import { Block } from "../../../core";
import { validatePassword } from '../../../modules/validation';

type ChangePasswordData={    
    oldPassword:string,
    password:string,
    confirmNewPassword:string
}

export class ChangePasswordPage extends Block{
    validate(changePasswordData:ChangePasswordData){      
        const nextSate={
            errors:{                
                password:'',
                confirmNewPassword:''
            },
            values:{...changePasswordData}
        }
        let validationResult = validatePassword(changePasswordData.password);
        if(validationResult.isFailure){
            nextSate.errors.password=validationResult.error!;
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
            password:(this.refs.password.firstElementChild as HTMLInputElement).value,
            confirmNewPassword:(this.refs.confirmNewPassword.firstElementChild as HTMLInputElement).value,
        };
        return changePasswordData;
    }
    protected getStateFromProps(): void {
        this.state={
            values:{
                login:'',
                password:''
            },
            errors:{
                login:'',
                password:''
            },
           
            onBlur:()=>{
                console.log("onBlur");
                const loginData=this.getData();
                this.validate(loginData);
            },
            onLogin:(e:Event)=>{ 
                const loginData=this.getData();
                this.validate(loginData);
                console.log('/login', loginData);
                e.preventDefault();                 
            }            
        };
    }
    
    protected render(): string {
        return `  
        <div class="container">
            <div class="profile__avatar">
                <a href="changeavatar.html">{{{ Avatar }}}</a>      
            </div>
            <div class="profile__properies">
                <form class="form form--vertical">
                    {{{ InputBlock
                        label="Старый пароль" 
                        name="oldPassword" 
                        type="password"
                    }}}
                    {{{ InputBlock label="Новый пароль" name="newPassword" type="password"}}}
                    {{{ InputBlock label="Повторите новый пароль" name="confirmNewPassword" type="password"}}}
                    {{{ Button text="Сохранить" mode="primary" onClick=}}}       
                </form>          
            </div>    
        </div>`;        
    }
}