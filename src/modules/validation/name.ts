import { ValidationResult } from "./types";
import {required} from './common';
export const validate=(login:string):ValidationResult=>{
    if(required(login).isFailure)
        return ValidationResult.fail("Имя не может быть пустым.");
   
    
    return ValidationResult.ok();
}