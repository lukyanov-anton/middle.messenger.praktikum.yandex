import { ValidationResult } from "./types";
import { required } from "./common";
const minLoginLength = 3;
const maxLoginLength = 20;
export const validate = (login: string): ValidationResult => {
  if (required(login).isFailure)
    return ValidationResult.fail("Требуется логин.");
  const length = login.length;
  if (length < minLoginLength || length > maxLoginLength)
    return ValidationResult.fail(
      `Длина логина должна быть от ${minLoginLength} до ${maxLoginLength} символов.`
    );
  if (!/(?!^\d+$)^[\w-]+$/.test(login))
    return ValidationResult.fail(
      "Логин может содержать цифры, но не состоять из них, латиница, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)."
    );
  return ValidationResult.ok();
};
