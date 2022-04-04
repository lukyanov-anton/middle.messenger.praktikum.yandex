import { ValidationResult } from "./types";
import {required} from './common';
export const validate=(name:string):ValidationResult=>{
    if(required(name).isFailure)
        return ValidationResult.fail("Имя не может быть пустым.");
    if(!/^[A-ZА-Я]{1}[A-Za-zА-Яа-я-]*$/.test(name))
        return ValidationResult.fail("Первая буква должна быть заглавной,латиница или кириллица, без пробелов и без цифр, нет спецсимволов (допустим только дефис).");
    return ValidationResult.ok();
}