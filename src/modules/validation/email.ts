import { ValidationResult } from "./types";
import {required} from './common';
export const validate=(email:string):ValidationResult=>{
    if(required(email).isFailure)
        return ValidationResult.fail("Требуется почта.");    
    if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email))
        return ValidationResult.fail("Почта указана неверно.");
    return ValidationResult.ok();
}