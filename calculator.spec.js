const { sum } = require("./calculator.js");
const { expect, test, describe } = require("@jest/globals");

describe("Calculator functions", () => {
  test("adds 2 + 3 to be equal 5n", () => {
    expect(sum("2", "3")).toEqual({ answer: 5n });
  });
  test("adds V + V to be equal X", () => {
    expect(sum("V", "V")).toEqual({ answer: "X" });
  });
  test("adds IX + XLI to be equal L", () => {
    expect(sum("IX", "XLI")).toEqual({ answer: "L" });
  });
  test("return error when we pass XXXX + XL", () => {
    expect(sum("XXXX", "XL")).toEqual({
      error: "Invalid input",
    });
  });
  test("return error when we pass IM + I", () => {
    expect(sum("IM", "I")).toEqual({ error: "Invalid input" });
  });
  test("adds '9999999' + '1111' to be equal 10001110n", () => {
    expect(sum("9999999", "1111")).toEqual({ answer: 10001110n });
  });
  test("return error when we pass XX + 11", () => {
    expect(sum("XX", "11")).toEqual({
      error: "Both numbers should be similar type",
    });
  });
  test("return error when we pass Y + X", () => {
    expect(sum("Y", "X")).toEqual({
      error: "Invalid input",
    });
  });
  test("return error when we pass XY + X", () => {
    expect(sum("XY", "X")).toEqual({
      error: "Invalid input",
    });
  });
  test("return error when we pass Y + 11", () => {
    expect(sum("Y", "11")).toEqual({
      error: "Both numbers should be similar type",
    });
  });
  test("adds 2.5 and 3", () => {
    expect(sum("2.5", "3")).toEqual({ answer: "5.5" });
  });
  test("adds 2.5 and 3", () => {
    expect(sum("2.5", "3")).toEqual({ answer: "5.5" });
  });
  test("adds 3 and 3.5", () => {
    expect(sum("3.5", "3")).toEqual({ answer: "6.5" });
  });
  test("adds 3.5 and 3.5", () => {
    expect(sum("3.5", "3.5")).toEqual({ answer: "7.0" });
  });
});
