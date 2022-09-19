import { analyzeArray } from "./main";

test("Example 1 - at least one element is not a number", () => {
  expect(analyzeArray([1, 2, 4, 6, "test"])).toBeUndefined();
});
test("Example 2 - analyze array of numbers", () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});
test("Example 3 - analyze array of numbers, one being string", () => {
  expect(analyzeArray(["1", 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});
test("Example 4 - analyze array of doubles", () => {
  expect(analyzeArray([0.5, 2, 0.23])).toEqual({
    average: 0.91,
    min: 0.23,
    max: 2,
    length: 3,
  });
});
test("Example 5 - analyze an array of negative numbers", () => {
  expect(analyzeArray([-6, -7, 0.25])).toEqual({
    average: -4.25,
    min: -7,
    max: 0.25,
    length: 3,
  });
});
