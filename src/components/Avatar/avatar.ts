import { Block } from "../../core";

import './avatar.css'

interface AvatarProps{
    
    onClick:()=>void
}

export class Avatar extends Block{
   /*  constructor({onClick}: AvatarProps){        
        super({ events:{click:onClick}});
    } */
    protected render(): string {
        return `
        <figure class="avatar avatar--128x128">
          <img class="avatar__image avatar__image--rounded" >
        </figure>
        `;
    }
}