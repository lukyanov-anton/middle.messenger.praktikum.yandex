import { ValidationResult } from "./types";
import { required } from "./common";
import { PhoneErrors } from "./errors";
const minPhoneLength = 10;
const maxPhoneLength = 15;
export const validate = (phone: string): ValidationResult => {
  if (required(phone).isFailure)
    return ValidationResult.fail(PhoneErrors.Required);
  const length = phone.length;
  if (length < minPhoneLength || length > maxPhoneLength)
    return ValidationResult.fail(
      PhoneErrors.MinMaxLength(minPhoneLength, maxPhoneLength)
    );
  if (!/^\+*[0-9]+$/.test(phone))
    return ValidationResult.fail(PhoneErrors.WrongStructure);
  return ValidationResult.ok();
};
