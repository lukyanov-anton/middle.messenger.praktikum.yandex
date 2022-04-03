import { ValidationResult } from "./types"
export const required=(value:string):ValidationResult=>{
    if(!value)
        return ValidationResult.fail("Value is required.");    
    return ValidationResult.ok();
}