import {ValidatorFn } from '@angular/forms';
import { RequiredValidator } from './required.validator';

export class CustomValidators {
    static requiredValidator: ValidatorFn = RequiredValidator.create();
}
