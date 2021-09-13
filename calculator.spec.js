const { sum } = require("./calculator.js");
const { expect, test, describe } = require("@jest/globals");

describe("Calculator functions", () => {
  test("adds 2 + 3 to be equal 5n", () => {
    expect(sum(2, 3)).toEqual({ answer: 5n });
  });
  test("adds V + V to be equal X", () => {
    expect(sum("V", "V")).toEqual({ answer: "X" });
  });
  test("adds IX + XLI to be equal L", () => {
    expect(sum("IX", "XLI")).toEqual({ answer: "L" });
  });
  test("return error when we pass XXXX + XL", () => {
    expect(sum("XXXX", "XL")).toEqual({
      error: "Failed to calculate",
    });
  });
  test("return error when we pass IM + I", () => {
    expect(sum("IM", "I")).toEqual({ error: "Failed to calculate" });
  });
  test("adds '9999999' + '1111' to be equal 10001110n", () => {
    expect(sum("9999999", "1111")).toEqual({ answer: 10001110n });
  });

  test("adds 9999999 + 1111 to be equal 10001110n", () => {
    expect(sum(9999999, 1111)).toEqual({ answer: 10001110n });
  });
  test("return error when we pass XX + 11", () => {
    expect(sum("XX", "11")).toEqual({
      error: "Both number should be similar type",
    });
  });
  test("return error when we pass Y + X", () => {
    expect(sum("Y", "X")).toEqual({
      error: "Failed to calculate",
    });
  });
  test("return error when we pass Y + 11", () => {
    expect(sum("Y", "11")).toEqual({
      error: "Both number should be similar type",
    });
  });
});
