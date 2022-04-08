export class CommonErrors {
  static Required = "Требуется значение.";
}

export class EmailErrors {
  static Required = "Требуется почта.";
  static WrongStructure = "Почта указана неверно.";
}
export class LoginErrors {
  static Required = "Требуется логин.";
  static MinMaxLength: (
    minLoginLength: number,
    maxLoginLength: number
  ) => string = (minLoginLength, maxLoginLength) =>
    `Длина логина должна быть от ${minLoginLength} до ${maxLoginLength} символов.`;
  static WrongStructure =
    "Логин может содержать цифры, но не состоять из них, латиница, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание).";
}

export class NameErrors {
  static Empty = "Имя не может быть пустым.";
  static WrongStructure =
    "Первая буква должна быть заглавной, латиница или кириллица, без пробелов и без цифр, нет спецсимволов (допустим только дефис).";
}

export class PasswordErrors {
  static Required: "Требуется пароль.";
  static WrongStructure: "Пароль должен содержать хотя бы одну заглавную букву и цифру.";
  static MinMaxLength: (
    minPasswordLength: number,
    maxPasswordLength: number
  ) => string = (minPasswordLength, maxPasswordLength) =>
    `Длина пароля должна быть от ${minPasswordLength} до ${maxPasswordLength} символов.`;
}

export class PhoneErrors {
  static Required = "Требуется телефон.";
  static MinMaxLength: (
    minPhoneLength: number,
    maxPhoneLength: number
  ) => string = (minPhoneLength, maxPhoneLength) =>
    `Длина телефона должна быть от ${minPhoneLength} до ${maxPhoneLength} символов.`;
  static WrongStructure =
    "Телефон должен состоять из цифр, может начинается с плюса.";
}
