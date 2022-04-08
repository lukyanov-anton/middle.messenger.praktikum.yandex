import { ValidationResult } from "./types";
import { required } from "./common";
const minPhoneLength = 10;
const maxPhoneLength = 15;
export const validate = (phone: string): ValidationResult => {
  if (required(phone).isFailure)
    return ValidationResult.fail("Требуется телефон.");
  const length = phone.length;
  if (length < minPhoneLength || length > maxPhoneLength)
    return ValidationResult.fail(
      `Длина телефона должна быть от ${minPhoneLength} до ${maxPhoneLength} символов.`
    );
  if (!/^\+*[0-9]+$/.test(phone))
    return ValidationResult.fail(
      "Телефон должен состоять из цифр, может начинается с плюса."
    );
  return ValidationResult.ok();
};
