import { FormControl, ValidatorFn } from '@angular/forms';

export class RequiredValidator {
    static create(): ValidatorFn {
        return (control: FormControl) => {
            if (control.value == null || (control.value && control.value.length === 0)) {
                return { 'required': true };
            }
            return null;
        };
    }
}
