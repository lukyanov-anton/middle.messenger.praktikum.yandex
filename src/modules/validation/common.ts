import { ValidationResult } from "./types";
import { CommonErrors } from "./errors";
export const required = (value: string): ValidationResult => {
  if (!value) return ValidationResult.fail(CommonErrors.Required);
  return ValidationResult.ok();
};
