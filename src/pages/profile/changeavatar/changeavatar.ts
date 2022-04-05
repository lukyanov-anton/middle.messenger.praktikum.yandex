import './changeavatar.css';
import { Block } from "../../../core";
import { required } from '../../../modules/validation/common';

type ChangeAvatarData={    
    avatar:string    
}

export class ChangeAvatarPage extends Block{
    validate(changeAvatarData:ChangeAvatarData){      
        const nextSate={
            errors:{                
                avatar:''                
            },
            values:{...changeAvatarData}
        }
        const validationResult = required(changeAvatarData.avatar);
        if(validationResult.isFailure){
            nextSate.errors.avatar="Задайте автатар.";
        }
        

        this.setState(nextSate);
    }
    getData():ChangeAvatarData{
        const changeData={
            avatar:(this.refs.avatar.firstElementChild as HTMLInputElement).value         
        };
        return changeData;
    }
    protected getStateFromProps(): void {        
        this.state={
            values:{
                avatar:''                
            },
            errors:{
                avatar:'',                
            },
           
            onBlur:()=>{
                console.log("onBlur");
                const changeData=this.getData();
                this.validate(changeData);
            },
            onSubmit:(e:Event)=>{ 
                const changeData=this.getData();
                this.validate(changeData);
                console.log('/changeavatar', changeData);
                e.preventDefault();                 
            }            
        };
    }
  protected render(): string {
    const {values,errors}=this.state;
    return ` 
        <div class="container">
            <div class="profile__avatar">
                {{{ Avatar }}}
            </div>
            <div class="profile__properies">
            <form class="form form--vertical">
                {{{ InputBlock
                    placeholder="Выбрать файл на компьютере" 
                    name="avatar"
                    ref="avatar" 
                    type="file"
                    value="${values.avatar}"
                    error="${errors.avatar}"
                    className="form__field"
                }}} 
                {{{ Button 
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