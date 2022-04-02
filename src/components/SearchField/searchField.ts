import './searchField.css'
import { Block } from "../../core";

interface SearchFieldProps{
    value:string,   
    placeholder:string,
    onInput:()=>void,
    className:string    
}

export class SearchField extends Block{
    constructor(props: SearchFieldProps){        
        super({...props});
    }
    protected render(): string {
        return `
            <input type='text' name='search' class='search-field {{className}}'  placeholder='{{placeholder}}' value='{{value}}' input=onInput />       
        `;
    }
}