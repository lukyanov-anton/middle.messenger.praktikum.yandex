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


export type DailyMessages={
    date:Date,
    messages:Message[],
}

export type Chat={
  id:number,
  messages:DailyMessages[]
}