import './signin.css';
import { Block } from "../../core";
import { validatePassword, validateLogin, validatePhone, validateEmail } from '../../modules/validation';

type SignData={
    email:string,
    login:string,
    first_name:string,
    second_name:string,
    phone:string,
    password:string,
    password_confirm:string
}

export class SigninPage extends Block{
    validate(signinData:SignData){      
        const nextSate={
            errors:{
                email:'',
                login:'',
                first_name:'',
                second_name:'',
                phone:'',
                password:'',
                password_confirm:''
            },
            values:{...signinData}
        }
        let validationResult = validateEmail(signinData.email);
        if(validationResult.isFailure){
            nextSate.errors.email=validationResult.error!;
        }
         validationResult = validateLogin(signinData.login);
        if(validationResult.isFailure){
            nextSate.errors.login=validationResult.error!;
        }
        validationResult = validatePhone(signinData.first_name);
        if(validationResult.isFailure){
            nextSate.errors.first_name=validationResult.error!;
        }
        validationResult = validatePhone(signinData.second_name);
        if(validationResult.isFailure){
            nextSate.errors.second_name=validationResult.error!;
        } 
        validationResult = validatePhone(signinData.phone);
        if(validationResult.isFailure){
            nextSate.errors.phone=validationResult.error!;
        }                
        validationResult = validatePassword(signinData.password);
        if(validationResult.isFailure){
            nextSate.errors.password=validationResult.error!;
        }
        validationResult = validatePassword(signinData.password_confirm);
        if(validationResult.isFailure){
            nextSate.errors.password_confirm=validationResult.error!;
        }

        this.setState(nextSate);
    }
    getSigninData(): SignData{
        const signinData={
            email:(this.refs.email.firstElementChild as HTMLInputElement).value,
            login:(this.refs.login.firstElementChild as HTMLInputElement).value,
            first_name:(this.refs.first_name.firstElementChild as HTMLInputElement).value,
            second_name:(this.refs.second_name.firstElementChild as HTMLInputElement).value,
            phone:(this.refs.phone.firstElementChild as HTMLInputElement).value,
            password:(this.refs.password.firstElementChild as HTMLInputElement).value,
            password_confirm:(this.refs.password_confirm.firstElementChild as HTMLInputElement).value
        };
        return signinData;
    }
    protected getStateFromProps(): void {
        this.state={
            values:{
                email:'',
                login:'',
                first_name:'',
                second_name:'',
                phone:'',
                password:'',
                password_confirm:''
            },
            errors:{
                email:'',
                login:'',
                first_name:'',
                second_name:'',
                phone:'',
                password:'',
                password_confirm:''
            },           
            onBlur:()=>{
                console.log("onBlur");
                const signinData=this.getSigninData();
                this.validate(signinData);
            },
            onSubmit:(e:Event)=>{ 
                const signinData=this.getSigninData();
                this.validate(signinData);
                console.log('/signin', signinData);
                e.preventDefault();                 
            }            
        };
    }
    protected render(): string {
        const {values,errors}=this.state;
        return `  
        <main class="container"> 
            <div class='card'>
                <header class="card__header">
                <p class="card__title">Регистрация</p>
                </header>
                <div class="card__content">
                    <form class='form form--vertical signin-page__form'>
                        {{{ InputBlock 
                            label="Почта" 
                            name="email"
                            ref="email" 
                            type="email" 
                            placeholder="Почта"
                            value="${values.email}"
                            error="${errors.email}"
                        }}}
                        {{{ InputBlock 
                            label="Логин" 
                            name="login"
                            ref="login"  
                            type="text" 
                            placeholder="Почта"
                            value="${values.login}"
                            error="${errors.login}"
                        }}}
                        {{{ InputBlock 
                            label="Имя" 
                            name="first_name"
                            ref="first_name" 
                            type="text" 
                            placeholder="Логин"
                            value="${values.first_name}"
                            error="${errors.first_name}"
                        }}}
                        {{{ InputBlock 
                            label="Фамилия" 
                            name="second_name" 
                            ref="second_name"
                            type="text" 
                            placeholder="Фамилия"
                            value="${values.second_name}"
                            error="${errors.second_name}"
                        }}}
                        {{{ InputBlock 
                            label="Телефон" 
                            name="phone"
                            ref="phone" 
                            type="tel" 
                            placeholder="Телефон"
                            value="${values.phone}"
                            error="${errors.phone}"
                        }}}
                        {{{ InputBlock 
                            label="Пароль" 
                            name="password"
                            ref="password" 
                            type="password" 
                            placeholder="Пароль"
                            value="${values.password}"
                            error="${errors.password}"
                        }}}
                        {{{ InputBlock 
                            label="Пароль (еще раз)"
                            name="password_confirm" 
                            ref="password"
                            type="password" 
                            placeholder="Пароль (еще раз)"
                            value="${values.password_confirm}"
                            error="${errors.password_confirm}"
                        }}}
                        {{{ Button text="Зарегистрироваться" mode="primary" onClick=onSubmit}}}
                        <div class="signin-page__link">                  
                            {{{ Link to='#/login' text="Войти"}}}
                        </div>
                    </form> 
                </div>    
            </div>
        </main>
        `;        
    }
}