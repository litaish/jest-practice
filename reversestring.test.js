import { reverseString } from "./main";

test("Example 1 - parameter is not a string", () => {
  expect(reverseString(0)).toBeUndefined();
});

test("Example 2 - expect a reversed string (one word)", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Example 3 - expect a reversed string (multiple words)", () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});
