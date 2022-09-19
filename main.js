import { string } from "yargs";

function capitalize(str) {
  if (str === undefined || typeof str !== "string") return;

  // Splits strings on one or more spaces
  const strings = str.trim().split(/\s+/);
  let result = [];

  for (let i = 0; i < strings.length; i++) {
    result[i] =
      strings[i][0].toUpperCase() + strings[i].substring(1).toLowerCase();
  }

  return result.join(" ");
}

function reverseString(str) {
  if (str === undefined || typeof str !== "string") return;

  const strings = str.trim().split(/\s+/);
  let arr = [];

  for (let i = 0; i < strings.length; i++) {
    arr[i] = strings[i].split("").reverse().join("");
  }

  return arr.reverse().join(" ");
}

function caesarCipher(str) {
  // key = 3

  if (typeof str !== "string") return "Invalid text";

  // Replace all double spaces with single spaces, trim whitespace, split words into array
  const strings = str
    .replace(/ +(?= )/g, "")
    .trim()
    .split(" ");

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const shifted = "defghijklmnopqrstuvwxyzabc".split("");
  let ciphered = [];
  // For each word
  for (let i = 0; i < strings.length; i++) {
    // Init as 2D array
    ciphered[i] = [];

    // For each letter in word
    for (let j = 0; j < strings[i].length; j++) {
      let index = 0;

      // If character is a letter, find the shifted character that corresponds to that letter
      if (isLetter(strings[i][j])) {
        index = alphabet.findIndex(
          (element) => element.toLowerCase() === strings[i][j].toLowerCase()
        );

        if (isLowerCase(strings[i][j])) {
          ciphered[i][j] = shifted[index];
        } else {
          ciphered[i][j] = shifted[index].toUpperCase();
        }
      } else {
        // If character is not a letter, keep the character to the ciphered text
        ciphered[i][j] = strings[i][j];
      }
    }
  }
  return ciphered.map(e => e.join("")).join(" ");
}

caesarCipher("Secret message.");

function isLowerCase(char) {
  return char === char.toLowerCase() ? true : false;
}
function isLetter(char) {
  return (char.length === 1 && char.match(/[a-z]/i)) ? true : false;
}

class Calculator {
  constructor() {}
  areNumbersValid(num1, num2) {
    // null - number
    if (num1 === null || num2 === null) return false;

    return !isNaN(num1) && !isNaN(num2) ? true : false;
  }
  add(num1, num2) {
    if (this.areNumbersValid(num1, num2)) {
      return Number(num1) + Number(num2);
    } else {
      return "Invalid numbers";
    }
  }
  subtract(num1, num2) {
    if (this.areNumbersValid(num1, num2)) {
      return Number(num1) - Number(num2);
    } else {
      return "Invalid numbers";
    }
  }
  divide(num1, num2) {
    if (this.areNumbersValid(num1, num2)) {
      return Number(num1) / Number(num2);
    } else {
      return "Invalid numbers";
    }
  }
  multiply(num1, num2) {
    if (this.areNumbersValid(num1, num2)) {
      return Number(num1) * Number(num2);
    } else {
      return "Invalid numbers";
    }
  }
}

export { capitalize, reverseString, Calculator, caesarCipher };
