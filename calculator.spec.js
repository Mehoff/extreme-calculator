const { sum } = require("./calculator.js");
const { expect, test, describe } = require("@jest/globals");

describe("Calculator functions", () => {
  test("adds 2 + 3 to be equal 5", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
