import { capitalize } from "./main";

test("Example 1 - expect string to be defined", () => {
  expect(capitalize("test")).toBeDefined();
});

test("Example 2 - expect a returned string", () => {
  expect(typeof capitalize("test")).toBe("string");
});

test("Example 3 - expect a correct returned value", () => {
  expect(capitalize("banana")).toBe("Banana");
});

test("Example 4 - expect the first letter to be capitalized, rest of letters to be lowercase", () => {
  expect(capitalize("BANAna")).toBe("Banana");
});

test("Example 5 - multiple words, expect both to be capitalized", () => {
  expect(capitalize("This is an example")).toBe("This Is An Example");
});

test("Example 6 - Alot of whitespace", () => {
  expect(capitalize("hello            world     ")).toBe("Hello World");
});

test("Example 7 - incorrect parameter - a number", () => {
  expect(capitalize(6)).toBeUndefined();
});
