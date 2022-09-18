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

export { capitalize, reverseString, Calculator };
