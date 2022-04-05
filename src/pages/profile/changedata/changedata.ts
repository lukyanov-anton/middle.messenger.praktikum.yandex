import './changedata.css';
import { Block } from "../../../core";
import { validateEmail, validateLogin, validateName, validatePhone } from '../../../modules/validation';
import { required } from '../../../modules/validation/common';


type ChangeDataData={    
    email:string,
    login:string,
    first_name:string,
    second_name:string,
    display_name:string,
    phone:string,
}

export class ChangeDataPage extends Block{
    validate(changeData:ChangeDataData){      
        const nextSate={
            errors:{                
                email:'',
                login:'',
                first_name:'',
                second_name:'',
                display_name:'',
                phone:'',
            },
            values:{...changeData}
        }
        let validationResult = validateEmail(changeData.email);
        if(validationResult.isFailure){
            nextSate.errors.email=validationResult.error!;
        }
        validationResult = validateLogin(changeData.login);
        if(validationResult.isFailure){
            nextSate.errors.login=validationResult.error!;
        }
        validationResult = validateName(changeData.first_name);
        if(validationResult.isFailure){
            nextSate.errors.first_name=validationResult.error!;
        }
        validationResult = validateName(changeData.second_name);
        if(validationResult.isFailure){
            nextSate.errors.second_name=validationResult.error!;
        }
        validationResult = required(changeData.display_name);
        if(validationResult.isFailure){
            nextSate.errors.display_name="Имя в чате не должно быть пустым.";
        }
        validationResult = validatePhone(changeData.phone);
        if(validationResult.isFailure){
            nextSate.errors.phone=validationResult.error!;
        }

        this.setState(nextSate);
    }
    getData():ChangeDataData{
        const changeData={
            email:(this.refs.email.firstElementChild as HTMLInputElement).value,
            login:(this.refs.login.firstElementChild as HTMLInputElement).value,
            first_name:(this.refs.first_name.firstElementChild as HTMLInputElement).value,
            second_name:(this.refs.second_name.firstElementChild as HTMLInputElement).value,
            display_name:(this.refs.display_name.firstElementChild as HTMLInputElement).value,
            phone:(this.refs.phone.firstElementChild as HTMLInputElement).value,
        };
        return changeData;
    }
    protected getStateFromProps(): void {
        this.state={
            values:{
                email:'',
                login:'',
                first_name:'',
                second_name:'',
                display_name:'',
                phone:'',
            },
            errors:{
                email:'',
                login:'',
                first_name:'',
                second_name:'',
                display_name:'',
                phone:'',
            },
           
            onBlur:()=>{
                console.log("onBlur");
                const changeData=this.getData();
                this.validate(changeData);
            },
            onSubmit:(e:Event)=>{ 
                const changeData=this.getData();
                this.validate(changeData);
                console.log('/changedata', changeData);
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
                        placeholder="Почта" 
                        name="email"
                        ref="email"
                        type="email"
                        value="${values.email}"
                        error="${errors.email}"
                        className ="form__field" 
                    }}}
                    {{{ InputBlock 
                        placeholder="Логин" 
                        name="login" 
                        ref="login"
                        type="text"
                        value="${values.login}"
                        error="${errors.login}" 
                        className ="form__field"
                    }}}
                    {{{ InputBlock 
                        placeholder="Имя" 
                        name="first_name" 
                        ref="first_name"
                        type="text" 
                        value="${values.first_name}"
                        error="${errors.first_name}"
                        className ="form__field"
                    }}}
                    {{{ InputBlock 
                        placeholder="Фамилия" 
                        name="second_name" 
                        ref="second_name"
                        type="text" 
                        value="${values.second_name}"
                        error="${errors.second_name}"
                        className="form__field"
                    }}}
                    {{{ InputBlock 
                        placeholder="Имя в чате"
                        name="display_name"
                        ref="display_name" 
                        type="text" 
                        value="${values.display_name}"
                        error="${errors.display_name}"
                        className="form__field"
                    }}}
                    {{{ InputBlock 
                        placeholder="Телефон" 
                        name="phone"
                        ref="phone"  
                        type="tel" 
                        value="${values.phone}"
                        error="${errors.phone}"
                        className="form__field"
                    }}}                    
                    {{{ Button text="Сохранить" mode="primary" onClick=onSubmit}}}       
                </form>                
            </div>    
        </div>`;        
    }
}