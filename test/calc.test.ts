/* more tests ai want to adds are */
// 1. test for invalid input
// 2. test for input that is not a number
// 3. test for input that is not a string
// 4. test for input that is not a roman numeral
// 5. test for input that is not a valid roman numeral
// 6. test for all valid (most of them)roman numerals
// 7. try to break the code
 //8. 



import { convertToNumber, convertToRoman } from '../src/calc';
// invalid input
test('should throw error for invalid input', () => {
  //  expect(() => convertToRoman(-1)).toThrow();
    expect(() => convertToRoman(0)).toThrow();
    expect(() => convertToRoman(4000)).toThrow();
    //expect(() => convertToRoman('a')).toThrow();
   // expect(() => convertToRoman(null)).toThrow();
});
describe('convertToRoman', () => {
  it('should return I for 1', () => {
    expect(convertToRoman(1)).toBe('I');
  });

  it('should return IV for 4', () => {
    expect(convertToRoman(4)).toBe('IV');
  });

  it('should return V for 5', () => {
    expect(convertToRoman(5)).toBe('V');
  });

  it('should return IX for 9', () => {
    expect(convertToRoman(9)).toBe('IX');
  });

  it('should return X for 10', () => {
    expect(convertToRoman(10)).toBe('X');
  });

  it('should return XL for 40', () => {
    expect(convertToRoman(40)).toBe('XL');
  });

  it('should return L for 50', () => {
    expect(convertToRoman(50)).toBe('L');
  });

  it('should return XC for 90', () => {
    expect(convertToRoman(90)).toBe('XC');
  });


  it('should return C for 100', () => {
    expect(convertToRoman(100)).toBe('C');
  });

  it('should return CD for 400', () => {
    expect(convertToRoman(400)).toBe('CD');
  });

  it('should return D for 500', () => {
    expect(convertToRoman(500)).toBe('D');
  });

  it('should return CM for 900', () => {
    expect(convertToRoman(900)).toBe('CM');
  });

  it('should return M for 1000', () => {
    expect(convertToRoman(1000)).toBe('M');
  });

  it('should return MMMCMXCIX for 3999', () => {
    expect(convertToRoman(3999)).toBe('MMMCMXCIX');
  });

  it('should return LIV for 54', () => {
    expect(convertToRoman(54)).toBe('LIV');
  });
});describe('convertToNumber', () => {
  it('should return 1 for I', () => {
    expect(convertToNumber('I')).toBe(1);
  });

  it('should return 4 for IV', () => {
    expect(convertToNumber('IV')).toBe(4);
  });

  it('should return 5 for V', () => {
    expect(convertToNumber('V')).toBe(5);
  });

  it('should return 9 for IX', () => {
    expect(convertToNumber('IX')).toBe(9);
  });

  it('should return 10 for X', () => {
    expect(convertToNumber('X')).toBe(10);
  });

  it('should return 40 for XL', () => {
    expect(convertToNumber('XL')).toBe(40);
  });

  it('should return 50 for L', () => {
    expect(convertToNumber('L')).toBe(50);
  });

  it('should return 90 for XC', () => {
    expect(convertToNumber('XC')).toBe(90);
  });

  it('should return 100 for C', () => {
    expect(convertToNumber('C')).toBe(100);
  });

  it('should return 400 for CD', () => {
    expect(convertToNumber('CD')).toBe(400);
  });

  it('should return 500 for D', () => {
    expect(convertToNumber('D')).toBe(500);
  });

  it('should return 900 for CM', () => {
    expect(convertToNumber('CM')).toBe(900);
  });

  it('should return 1000 for M', () => {
    expect(convertToNumber('M')).toBe(1000);
  });

  it('should return 3999 for MMMCMXCIX', () => {
    expect(convertToNumber('MMMCMXCIX')).toBe(3999);
  });

  it('should return 54 for LIV', () => {
    expect(convertToNumber('LIV')).toBe(54);
  });
});



