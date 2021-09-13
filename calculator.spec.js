const { sum } = require("./calculator.js");
const { expect, test, describe } = require("@jest/globals");

describe("Calculator functions", () => {
    test("adds 2 + 3 to be equal 5", () => {
        expect(sum(2, 3)).toEqual({ answer: 5 });
    });
    test("adds V + V to be equal X", () => {
        expext(sum("V", "V")).toEqual({ answer: "X" })
    });
    test("adds IX + XL to be equal LIV", () => {
        expext(sum("IX", "XLI")).toEqual({ answer: "LIV" })
    });
    test("return error when we pass XXXX + XL", () => {
        expext(sum("XXXX", "XL")).toEqual({ error: "" })
    });
    test("return error when we pass IM + I", () => {
        expext(sum("IM", "I")).toEqual({ error: "" })
    });
    test("adds 9999999 + 1111 to be equal LIV", () => {
        expext(sum("9999999", "1111")).toEqual({ answer: "10001110" })
    });
    test("return error when we pass XX + 11", () => {
        expext(sum("XX", "11")).toEqual({ error: "" })
    });
    test("return error when we pass Y + X", () => {
        expext(sum("XX", "11")).toEqual({ error: "" })
    });
    test("return error when we pass Y + X", () => {
        expext(sum("XX", "11")).toEqual({ error: "" })
    });
});