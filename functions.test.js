import {
  calculator,
  capitalize,
  reverseString,
  analyzeArray,
  caesarCipher,
} from "./functions";

test("capitalize jack to be Jack", () => {
  expect(capitalize("jack")).toBe("Jack");
});

test("reverse kirjastonhoitaja to be ajatiohnotsajrik ", () => {
  expect(reverseString("kirjastonhoitaja")).toBe("ajatiohnotsajrik");
});

test('calculator add function to return 3 on "1 + 2" ', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('calculator multiply function to return 6 on "2 * 3" ', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('calculator divide function to return 3 on "6 / 2" ', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test('calculator susbtract function to return 2 on "6 - 4" ', () => {
  expect(calculator.substract(6, 4)).toBe(2);
});

test("analyzeArray sum: 15, max: 5, average: 3, length: 5, min: 1", () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(analyzeArray(numbers)).toEqual({
    sum: 15,
    max: 5,
    average: 3,
    length: 5,
    min: 1,
  });
});

test('ceasarCipher return "Ymj Tins uwtojhy Wzqjx!!" on input: "The Odin project Rules!!", 5 ', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(caesarCipher("The Odin project Rules!!", 5)).toBe(
    "Ymj Tins uwtojhy Wzqjx!!"
  );
});
