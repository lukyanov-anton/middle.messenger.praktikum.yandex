import './login.css';
import { Block } from "../../core";
import { validatePassword, validateLogin } from '../../modules/validation';

type LoginData={
    login:string,
    password:string
}

export class LoginPage extends Block{  
    validate(loginData:LoginData){      
        const nextSate={
            errors:{
                login:'',
                password:''
            },
            values:{...loginData}
        }
        let validationResult = validateLogin(loginData.login);
        if(validationResult.isFailure){
            nextSate.errors.login=validationResult.error!;
        }                
        validationResult = validatePassword(loginData.password);
        if(validationResult.isFailure){
            nextSate.errors.password=validationResult.error!;
        }

        this.setState(nextSate);
    }
    getLoginData():LoginData{
        const loginData={
            login:(this.refs.login.firstElementChild as HTMLInputElement).value,
            password:(this.refs.password.firstElementChild as HTMLInputElement).value,
        };
        return loginData;
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
                const loginData=this.getLoginData();
                this.validate(loginData);
            },
            onSubmit:(e:Event)=>{ 
                const loginData=this.getLoginData();
                this.validate(loginData);
                console.log('/login', loginData);
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
                <p class="card__title">Вход</p>
                </header>
                <div class="card__content">
                    <form class="form form--vertical login-page__form">
                        {{{ InputBlock 
                            label="Логин" 
                            name="login" 
                            ref="login"
                            placeholder="Логин" 
                            type="text"
                            value="${values.login}"
                            error="${errors.login}"
                            onBlur=onBlur
                            className="form__field"
                        }}}
                        {{{ InputBlock 
                            label="Пароль" 
                            name="password" 
                            ref="password"
                            placeholder="Пароль" 
                            type="password"
                            value="${values.password}"
                            error="${errors.password}"
                            className="form__field"
                        }}}
                        {{{ Button 
                            text="Войти" 
                            mode="primary" 
                            onClick=onSubmit
                            className="form__field"
                        }}}       
                        <div class="login-page__link">
                            {{{ 
                                Link to='./signin.html' 
                                text="Ещё не зарегистрированы?"
                            }}}
                        </div>
                    </form>
                </div>    
            </div>
        </main>
        `;        
    }
}