import { ValidationResult } from "./types";
import {required} from './common';
export const validate=(login:string):ValidationResult=>{
    if(required(login).isFailure)
        return ValidationResult.fail("Требуется логин.");
    const length=login.length;
    if(length<3 || length >20)
        return ValidationResult.fail("Длина логина должна быть от 3 до 20 символов.");
    if(!/(?!^\d+$)^[\w-]+$/.test(login))
        return ValidationResult.fail("Логин может содержать цифры, но не состоять из них, латиница, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание).");
    return ValidationResult.ok();
}