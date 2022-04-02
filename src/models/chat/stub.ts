import {Chat,MessageDirection} from './index';

export const ChatsStub:Chat[] = [{
  id:1,
  messages:[
      {date:new Date(),
      messages:[
          {id:1, text:"Привет 123", time:new Date(), direction:MessageDirection.In},
          {id:2, text:"Будьте в восторге от потрясающей детализации дисплея HUAWEI MateView 4K+ Ultra-HD. Благодаря дополнительным 1,5 миллионам пикселей по сравнению со стандартным 4K на массивном 28,2-дюймовом экране вы сможете добиться большего и более четкого видения в своей работе и жизни. Соотношение экрана к корпусу до 94% отодвигает верхнюю и боковые панели до едва заметных 6 мм, освобождая ваше воображение для больших возможностей.", time:new Date(), direction:MessageDirection.Out},
          {id:3, text:"28.2' Монитор HUAWEI MateView HSN-CBA серебристый", time:new Date(), direction:MessageDirection.Out},
          {id:4, text:"While string enums don’t have auto-incrementing behavior, string enums have the benefit that they “serialize” well. In other words, if you were debugging and had to read the runtime value of a numeric enum, the value is often opaque - it doesn’t convey any useful meaning on its own (though reverse mapping can often help). String enums allow you to give a meaningful and readable value when your code runs, independent of the name of the enum member itself.", time:new Date(), direction:MessageDirection.In},
          {id:5, text:"Продаю новый MacBook M1 Pro. После оплаты товар заказывается и через неделю (от 3-7 дней) доставляется. Лично отдаю в руки.", time:new Date(), direction:MessageDirection.In}
        ]},
        {date:new Date(new Date().getDate() + 1),
            messages:[
                {id:1, text:"Привет 123", time:new Date(), direction:MessageDirection.In},
                {id:2, text:"Будьте в восторге от потрясающей детализации дисплея HUAWEI MateView 4K+ Ultra-HD. Благодаря дополнительным 1,5 миллионам пикселей по сравнению со стандартным 4K на массивном 28,2-дюймовом экране вы сможете добиться большего и более четкого видения в своей работе и жизни. Соотношение экрана к корпусу до 94% отодвигает верхнюю и боковые панели до едва заметных 6 мм, освобождая ваше воображение для больших возможностей.", time:new Date(), direction:MessageDirection.Out},
                {id:3, text:"28.2' Монитор HUAWEI MateView HSN-CBA серебристый", time:new Date(), direction:MessageDirection.Out},
                {id:4, text:"While string enums don’t have auto-incrementing behavior, string enums have the benefit that they “serialize” well. In other words, if you were debugging and had to read the runtime value of a numeric enum, the value is often opaque - it doesn’t convey any useful meaning on its own (though reverse mapping can often help). String enums allow you to give a meaningful and readable value when your code runs, independent of the name of the enum member itself.", time:new Date(), direction:MessageDirection.In},
                {id:5, text:"Продаю новый MacBook M1 Pro. После оплаты товар заказывается и через неделю (от 3-7 дней) доставляется. Лично отдаю в руки.", time:new Date(), direction:MessageDirection.In}
              ]}
    ]
  },
  {id:2,
      messages:[{date:new Date(),
          messages:[
              {id:1, text:"Messsage 3", time:new Date(), direction:MessageDirection.In},
              {id:2, text:"Messsage 4", time:new Date(), direction:MessageDirection.Out},
              {id:3, text:"Messsage 5", time:new Date(), direction:MessageDirection.Out}]}]
  }];
