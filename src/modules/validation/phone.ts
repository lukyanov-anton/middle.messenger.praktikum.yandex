import { ValidationResult } from "./types";
import {required} from './common';
export const validate=(phone:string):ValidationResult=>{
    if(required(phone).isFailure)
        return ValidationResult.fail("Требуется телефон.");
    const length=phone.length;
    if(length<10 || length >15)
        return ValidationResult.fail("Длина телефона должна быть от 10 до 15 символов.");
    if(!/^\+*[0-9]+$/.test(phone))
        return ValidationResult.fail("Телефон должен состоять из цифр, может начинается с плюса.");
    return ValidationResult.ok();
}