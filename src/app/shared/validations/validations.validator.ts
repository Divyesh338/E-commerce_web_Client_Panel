import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Text field validator
 * @export
 * @class TextFileValidator
 */
export class TextFileValidator {
    static validTextField(fc: FormControl) {
        if (fc.value != undefined && fc.value != '' && fc.value != null) {
            const regex = /^[0-9a-zA-Z]+$/;
            if (regex.test(fc.value)) {
                return null;
            } else {
                return {
                    validTextField: true,
                };
            }
        } else {
            return null;
        }
    }
}

/**
 * number/numeric field validator
 * @export
 * @class NumericFieldValidators
 */
export class NumericFieldValidators {
    static validNumericfield(fc: FormControl) {
        if (fc.value != undefined && fc.value != '' && fc.value != null) {
            const regex = /[0-9]+$/;
            if (regex.test(fc.value)) {
                return null;
            } else {
                return {
                    validNumericfield: true,
                };
            }
        } else {
            return null;
        }
    }
}

/**
 * character field validator
 * @export
 * @class CharFieldValidator
 */
export class CharFieldValidator {
    static validCharfield(fc: FormControl) {
        if (fc.value != undefined && fc.value != '' && fc.value != null) {
            const regex = /^[a-zA-Z]+$/;
            if (regex.test(fc.value)) {
                return null;
            } else {
                return {
                    validCharfield: true,
                };
            }
        } else {
            return null;
        }
    }
}

/**
 * email field validator
 * @export
 * @class CharFieldValidator
 */
export class EmailFieldValidator {
    static EmailValidator(fc: FormControl) {
        if (fc.value != undefined && fc.value != '' && fc.value != null) {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (regex.test(fc.value)) {
                return null;
            } else {
                return {
                    EmailValidator: true,
                };
            }
        } else {
            return null;
        }
    }
}

/**
 * no white space validator
 * @export
 * @class NoWhiteSpaceValidators
 */
export class NoWhiteSpaceValidators {
    static NoWhiteSpace(fc: FormControl) {
        if (fc.value != undefined && fc.value != '' && fc.value != null) {
            const regex = fc.value.toString().trim().length === 0;
            if (!regex) {
                return null;
            } else {
                return {
                    NoWhiteSpace: true,
                };
            }
        } else {
            return null;
        }
    }
}

/**
 * validations to check two field to be same values
 * @export
 * @class
 */
// export function MustMatchValidator(
//     controlname: string,
//     matchingcontrolname: string
// ) {
//     return (formGroup: FormGroup) => {
//         const control = formGroup.controls[controlname];
//         const matchingcontrol = formGroup.controls[matchingcontrolname];

//         if (matchingcontrol.errors && !matchingcontrol.errors['mustMatch']) {
//             return;
//         }

//         if (control.value !== matchingcontrol.value) {
//             matchingcontrol.setErrors({
//                 mustMatch: true,
//             });
//         } else {
//             matchingcontrol.setErrors(null);
//         }
//     };
// }



export function MustMatchValidator(
    controlname: string,
    matchingcontrolname: string
): ValidatorFn {
    return (ctrl: AbstractControl): ValidationErrors | null => {
        const control = ctrl.get(controlname);
        const matchingcontrol = ctrl.get(matchingcontrolname);

        if (!control || !matchingcontrol) {
            return null;
        }

        if (matchingcontrol.errors && !matchingcontrol.errors['mustMatch']) {
            return null;
        }

        if (control.value !== matchingcontrol.value) {
            matchingcontrol.setErrors({
                mustMatch: true,
            });
        } else {
            matchingcontrol.setErrors(null);
        }
        return null;
    };
}