/**For checking password and confirm password are equal */
import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{
      provide : NG_VALIDATORS,
      useExisting : EqualValidator,
      multi: true
  }]
})
export class EqualValidator implements Validator {
  /**Take input from the parent, usually actual password */
  @Input() appConfirmEqualValidator: string;
  /**Validate function to check the passwords
   * @return object if error, null if success
   */
  validate(control : AbstractControl) : {[ key: string ]: any} | null{
    /**Get the current child, since confirm password and password both are siblings,
     *  go one level up and then find.
     * */
    const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
    /**Check wether both are equal or not */
    if(controlToCompare && controlToCompare.value !== control.value){
        return { 'notEqual' : true};
    } 
    /**If equal send null */
    return null
  }
}