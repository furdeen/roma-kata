// Purpose: TypeScript file for Roman Numeral Calculator.
export function convertToRoman(num: number) : string {
    if (num <= 0) {
        throw new Error('they never invented zero, silly!');
    }
    else if (num >= 4000) { throw new Error('its looklike they were not greedy too');}

    let romanNumeral = "";
    const romanNumeralArray = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    const numberArray = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    for (let i = 0; i < numberArray.length; i++) {
        while (num >= numberArray[i]) {
            romanNumeral += romanNumeralArray[i];
            num -= numberArray[i];
        }
    }
    return romanNumeral;
}
// purpose: TypeScript function to convert Roman Numerals to numbers.
export function convertToNumber(romanNumeral: string) : number {
    let number = 0;
    let romanNumeralArray = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let numberArray = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    for (let i = 0; i < numberArray.length; i++) {
        while (romanNumeral.indexOf(romanNumeralArray[i]) === 0) {
            number += numberArray[i];
            romanNumeral = romanNumeral.replace(romanNumeralArray[i], "");
        }
    }
    return number; 
}