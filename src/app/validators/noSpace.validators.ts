// We have to import these two module to make custom validations
import { AbstractControl,ValidationErrors } from "@angular/forms";

export class noSpace{
    // create the method here
    // making it static function so that we do not need to instantiate the method in component.ts file
    static noSpaceValidation(control:AbstractControl):ValidationErrors | null{
        let controlValue = control.value as string;
        // checking if the occurence of space is greater than 0 in string then return error key true
        if(controlValue.indexOf(' ')>0){
            return {
                // this key will be used in html to find the error key
                no_space : true
            }
        }else{
            return null;
        }
    }
    // This is use for password with Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character
    static strictPassword(control:AbstractControl):ValidationErrors|null{
        let passValue = control.value as string;
        let sampleRegEx: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
        // if the password is not matched with regex then pass the validation error key strictPass to html as true which will show the alert message.
        if(!sampleRegEx.test(passValue)){
            return {
                strictPass : true
            }
        }else{
            return null;
        }
    }
}