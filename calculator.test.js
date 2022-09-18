import { Calculator } from "./main";

test("Example 1 - addition - add two numbers", () => {
  expect(new Calculator().add(1, 3)).toBe(4);
});
test("Example 2 - addition - add two numbers as strings", () => {
  expect(new Calculator().add("1", "3")).toBe(4);
});
test("Example 3 - addition - add one number and one string", () => {
  expect(new Calculator().add("1", 6)).toBe(7);
});
test("Example 4 - addition - add one number to a non number", () => {
  expect(new Calculator().add(1, "test")).toBe("Invalid numbers");
});
test("Example 5 - addition - add two doubles", () => {
  expect(new Calculator().add(0.05, 1.2)).toBe(1.25);
});
test("Example 6 - addition - add a negative number to a positive number", () => {
  expect(new Calculator().add(-2, 4)).toBe(2);
});
test("Example 7 - addition - add null to number", () => {
  expect(new Calculator().add(null, 2)).toBe("Invalid numbers");
});
test("Example 8 - addition - add undefined to a number", () => {
  expect(new Calculator().add(1, undefined)).toBe("Invalid numbers");
});
test("Example 9 - subtraction - subtract two numbers", () => {
  expect(new Calculator().subtract(5, 2)).toBe(3);
});
test("Example 9 - subtraction - subtract a string (number) from number", () => {
  expect(new Calculator().subtract(5, "2")).toBe(3);
});
test("Example 10 - subtraction - subtract a negative string (number) from number", () => {
  expect(new Calculator().subtract(5, "-2")).toBe(7);
});
test("Example 11 - division - divide two numbers", () => {
  expect(new Calculator().divide(10, 2)).toBe(5);
});
test("Example 12 - division - divide a number with a string", () => {
  expect(new Calculator().divide(10, "2")).toBe(5);
});
test("Example 13 - division - divide a number with a double", () => {
  expect(new Calculator().divide(10, 0.5)).toBe(20);
});
test("Example 14 - division - division by 0", () => {
  expect(new Calculator().divide(0, 2)).toBe(0);
});
test("Example 15 - multiplication - multiply two numbers", () => {
  expect(new Calculator().multiply(5, 2)).toBe(10);
});
test("Example 15 - multiplication - multiply two doubles", () => {
  expect(new Calculator().multiply(0.2, 0.5)).toBe(0.1);
});
test("Example 16 - multiplication - multiply negative string by a double", () => {
  expect(new Calculator().multiply("-0.2", 0.5)).toBe(-0.1);
});
