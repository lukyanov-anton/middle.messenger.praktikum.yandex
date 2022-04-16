export class ValidationResult{
    private _isSuccess:boolean;    
    public error?:string;
    private constructor(isSuccess:boolean, error?:string){
        this._isSuccess=isSuccess;
        this.error=error;
    }
    get isSuccess(){
        return this._isSuccess;
    }
    get isFailure(){
        return !this.isSuccess;
    }

    public static ok(){return new ValidationResult(true);}
    public static fail(error:string){return new ValidationResult(false,error);}
    
}