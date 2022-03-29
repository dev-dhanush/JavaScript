import { IValidator } from "../interface/interface";

class Validator implements IValidator {
    isValidString(s: string, regex: RegExp, minValue: number, maxValue?: number): boolean {  
        return maxValue ? (s.length > minValue && s.length < maxValue && regex.test(s)) : (s.length === minValue && regex.test(s)) ;
    }
    
   
}

export { Validator };
