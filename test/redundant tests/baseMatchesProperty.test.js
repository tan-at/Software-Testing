/*
import { expect } from "chai";
import baseMatchesProperty from "../../src/.internal/baseMatchesProperty";

describe("baseMatchesProperty", () => {
  it("should match properties with strict equality", () => {
    const matcher = baseMatchesProperty("a", 42);
    const obj = { a: 42, b: "hello" };

    expect(matcher(obj)).to.be.true;
  });

  it("should handle undefined properties", () => {
    const matcher = baseMatchesProperty("a", undefined);
    const obj = { b: "hello" };

    expect(matcher(obj)).to.be.false;
  });

  it("should handle complex paths", () => {
    const matcher = baseMatchesProperty("a.b[0].c", "value");
    const obj = { a: { b: [{ c: "value" }] } };

    expect(matcher(obj)).to.be.true;
  });
});
*/
