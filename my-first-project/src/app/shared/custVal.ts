import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function keywordValidator(control: AbstractControl): ValidationErrors | null {
const value = control.value ? control.value.toLowerCase().trim() : '';

//ban a list of words from being used
  const banWords = ['test', 'fraud', 'fruit', 'pet'];

//if the user typed any of the words matched return
  if (banWords.includes(value)) {
    return {banKeyword: true };
  }
return null;
}

export const crossRefMint: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
const condition = group.get('condition')?.value;
const value = group.get('value')?.value || 0;

//rule is if the item is Mint the price shouldn't be under $50
  if (condition === 'Mint' && Number(value) < 50) {
    return {
      crossRefMint: true
    };
  }
  return null;
}
