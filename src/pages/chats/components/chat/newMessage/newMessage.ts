import './newMessage.css';
import { Block } from "../../../../../core";
import { required } from '../../../../../modules/validation/common';

type NewMessageData={
    message:string   
}

export class NewMessage extends Block{
    validate(newMessageData:NewMessageData){      
        const nextState={
            errors:{
                message:'',               
            },
            values:{...newMessageData}
        }
        const validationResult = required(newMessageData.message);
        if(validationResult.isFailure){
            nextState.errors.message="Напишите сообщение"!;
        }        
        
        this.setState(nextState);
    }
    getNewMessageData(): NewMessageData{        
        const newMessageData={
            message:(this.getContent().querySelector('input') as HTMLInputElement).value,           
        };
        return newMessageData;
    }
    protected getStateFromProps(): void {
        this.state={
            values:{
                massage:'',               
            },
            errors:{
                message:'',               
            },           
            onBlur:()=>{
                console.log("onBlur");
                const newMessageData=this.getNewMessageData();
                this.validate(newMessageData);
            },
            onFileSubmit:(e:Event)=>{                 
                console.log('/newFileMessage');
                e.preventDefault();                 
            },
            onMessageSubmit:(e:Event)=>{ 
                const newMessageData=this.getNewMessageData();
                this.validate(newMessageData);
                console.log('/newMessage', newMessageData);
                e.preventDefault();                 
            }            
        };
    }
    protected render(): string {
        
        const {values,errors}=this.state;
        return `
        <form class="new-message" >            
            {{{ Button 
                text="Вложение" 
                type='button'               
                onClick=onFileSubmit
                className='new-message__file'
            }}}            

            {{{ InputBlock                
                name="message" 
                ref="message"
                type="text" 
                placeholder="Сообщение"
                value="${values.message}"
                error="${errors.message}"
                className="new-message__input" 
                onBlur=onBlur
            }}}                   
           
            {{{ Button 
                text="Ок"
                mode="primary" 
                onClick=onMessageSubmit
                className='new-message__button'
            }}}   
        </form>
        `;
    }
}