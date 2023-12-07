import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("isEmpty", () => {
  it("should return true for null", () => {
    expect(isEmpty(null)).to.be.true;
  });

  it("should return true for empty array", () => {
    expect(isEmpty([])).to.be.true;
  });

  it("should return false for non-empty array", () => {
    expect(isEmpty([1, 2, 3])).to.be.false;
  });
});
