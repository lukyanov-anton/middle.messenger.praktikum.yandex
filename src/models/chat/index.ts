export type  Message = {
  id:number,    
  text:string,
  direction:MessageDirection,
  time:Date
}

export enum MessageDirection {
  In="in",
  Out="out",    
}


export type DailyMessages={
    date:Date,
    messages:Message[],
}

export type Chat={
  id:number,
  messages:DailyMessages[]
}

export type ChatInfo={
  title:string,
  image:string,
  newMessageCount:number,
  lastMessage:string,
  lastMessageDate:Date
}