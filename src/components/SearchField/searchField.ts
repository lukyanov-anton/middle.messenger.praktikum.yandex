import { Block } from "../../core";

interface SearchFieldProps{
    searchString:string,    
}

export class SearchField extends Block{
    constructor(props: SearchFieldProps){        
        super({...props});
    }
    protected render(): string {
        return `
        <div class="search-field">
            {{{ Input type="text" name="search" value={{searchString}} }}}
        </div>
        `;
    }
}