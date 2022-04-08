import { ValidationResult } from "./types";
import { required } from "./common";
import { LoginErrors } from "./errors";
const minLoginLength = 3;
const maxLoginLength = 20;
export const validate = (login: string): ValidationResult => {
  if (required(login).isFailure)
    return ValidationResult.fail(LoginErrors.Required);
  const length = login.length;
  if (length < minLoginLength || length > maxLoginLength)
    return ValidationResult.fail(
      LoginErrors.MinMaxLength(minLoginLength, maxLoginLength)
    );
  if (!/(?!^\d+$)^[\w-]+$/.test(login))
    return ValidationResult.fail(LoginErrors.WrongStructure);
  return ValidationResult.ok();
};
