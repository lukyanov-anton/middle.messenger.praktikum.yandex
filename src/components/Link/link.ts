import { Block } from "../../core";

import './link.css'

interface LinkProps{
    to:string,
    text:string
}

export class Link extends Block{
    constructor(props:LinkProps){
        const onClick=(e:MouseEvent)=>{
            console.log("Link click");
            //e.preventDefault();            
        };
        super({...props,events:{click:onClick}});
    }
    protected render(): string {
        return `
        <a href='{{to}}' class='link'>{{text}}</a> 
        `;
    }
}