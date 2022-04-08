import { ValidationResult } from "./types";
import { required } from "./common";
const minPasswordLength = 8;
const maxPasswordLength = 40;
export const validate = (password: string): ValidationResult => {
  if (required(password).isFailure)
    return ValidationResult.fail("Требуется пароль.");
  const length = password.length;
  if (length < minPasswordLength || length > maxPasswordLength)
    return ValidationResult.fail(
      `Длина пароля должна быть от ${minPasswordLength} до ${maxPasswordLength} символов.`
    );
  if (!/^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,40}$/.test(password))
    return ValidationResult.fail(
      "Пароль должен содержать хотя бы одну заглавную букву и цифру."
    );
  return ValidationResult.ok();
};
