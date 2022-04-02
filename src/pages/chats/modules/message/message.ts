export type  Message = {
  id:number,    
  text:string,
  direction:MessageDirection,
  time:Date
}

export enum MessageDirection {
  In,
  Out,    
}

