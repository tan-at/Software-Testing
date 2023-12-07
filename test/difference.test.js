import { expect } from "chai";
import difference from "../src/difference.js";

describe("difference", () => {
  it("should return an array of values not included in the other arrays", () => {
    const result = difference([2, 1], [2, 3]);
    expect(result).to.deep.equal([1]);
  });

  it("should handle multiple arrays", () => {
    const result = difference([1, 2, 3, 4], [2, 3], [3, 4]);
    expect(result).to.deep.equal([1]);
  });

  it("should return an empty array if the input array is empty", () => {
    const result = difference([], [1, 2, 3]);
    expect(result).to.deep.equal([]);
  });

  it("should return an empty array if no values are provided", () => {
    const result = difference([1, 2, 3]);
    expect(result).to.deep.equal([1, 2, 3]);
  });

  it("should handle non-array input gracefully", () => {
    const result = difference({ key: "value" }, [1, 2, 3]);
    expect(result).to.deep.equal([]);
  });

  it("should handle mixed data types", () => {
    const result = difference([1, "two", { key: "value" }], ["two", 3]);
    expect(result).to.deep.equal([1, { key: "value" }]);
  });

  it("should handle empty arrays in values", () => {
    const result = difference([1, 2, 3], [], [3, 4], []);
    expect(result).to.deep.equal([1, 2, 3]);
  });

  it("should handle undefined and null values", () => {
    const result = difference([1, null, 3], [null, undefined, 3]);
    expect(result).to.deep.equal([1]);
  });

  it("should handle large arrays efficiently", () => {
    const array = Array.from({ length: 1000000 }, (_, index) => index);
    const result = difference(array, [999999, 1000000]);
    expect(result).to.deep.equal(
      Array.from({ length: 999999 }, (_, index) => index)
    );
  });
});
