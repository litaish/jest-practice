import { caesarCipher } from "./main";

test("Example 1 - invalid input - numbers", () => {
  expect(caesarCipher(54)).toBe("Invalid text");
});
test("Example 2 - normal text", () => {
  expect(caesarCipher("hello")).toBe("khoor");
});
test("Example 3 - normal text with capitalized letters", () => {
  expect(caesarCipher("Gouda")).toBe("Jrxgd");
});
test("Example 4 - normal text with capitalized letters at the end of alphabet", () => {
  expect(caesarCipher("Xylophone")).toBe("Aborskrqh");
});
test("Example 5 - a sentence", () => {
  expect(caesarCipher("Hello World")).toBe("Khoor Zruog");
});
test("Example 5 - a sentence with punctuation", () => {
  expect(caesarCipher("Today is a very beautiful day!")).toBe("Wrgdb lv d yhub ehdxwlixo gdb!");
});
test("Example 6 - whitespace", () => {
  expect(caesarCipher("         Today is a very beautiful day!    ")).toBe("Wrgdb lv d yhub ehdxwlixo gdb!");
});
test("Example 7 - multispaces replaced with one space", () => {
  expect(caesarCipher("What a     wonderful        sea...")).toBe("Zkdw d zrqghuixo vhd...");
});
test("Example 8 - numbers stay the same", () => {
  expect(caesarCipher("This is a number example 123???")).toBe("Wklv lv d qxpehu hadpsoh 123???");
});
