import { Block } from "../../core";

interface SearchFieldProps{
    value:string,
    onInput:()=>void    
}

export class SearchField extends Block{
    constructor(props: SearchFieldProps){        
        super({...props});
    }
    protected render(): string {
        return `        
            {{{ Input type="text" name="search" value=value onInput=onInput }}}        
        `;
    }
}