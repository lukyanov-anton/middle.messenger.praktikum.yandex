import { ValidationResult } from "./types";
import {required} from './common';
export const validate=(email:string):ValidationResult=>{
    if(required(email).isFailure)
        return ValidationResult.fail("Требуется почта.");
    
    if(!/(?!^\d+$)^[a-zA-Z0-9-_]+$/.test(email))
        return ValidationResult.fail("Логин может содержать цифры, но не состоять из них, латиница, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание).");
    return ValidationResult.ok();
}