import { ValidationResult } from "./types";
import {required} from './common';
export const validate=(password:string):ValidationResult=>{
    if(required(password).isFailure)
        return ValidationResult.fail("Требуется пароль.");
    const length=password.length;
    if(length<8 || length >40)
        return ValidationResult.fail("Длина пароля должна быть от 8 до 40 символов.");
    if(!/^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,40}$/.test(password))
        return ValidationResult.fail("Пароль должен содержать хотя бы одну заглавную букву и цифру.");
    return ValidationResult.ok();
}