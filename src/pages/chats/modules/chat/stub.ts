import {Chat,MessageDirection} from './index';

export const ChatsStub:Chat[] = [{
  id:1,
  messages:[{date:new Date(),
      messages:[
          {id:1, text:"Messsage 1", time:new Date(), direction:MessageDirection.In},
          {id:2, text:"Messsage 2", time:new Date(), direction:MessageDirection.Out}]}]
  },
  {id:2,
      messages:[{date:new Date(),
          messages:[
              {id:1, text:"Messsage 3", time:new Date(), direction:MessageDirection.In},
              {id:2, text:"Messsage 4", time:new Date(), direction:MessageDirection.Out},
              {id:3, text:"Messsage 5", time:new Date(), direction:MessageDirection.Out}]}]
  }];
