import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("isEmpty", () => {
  //--------------------Tests for empty values--------------------
  it("should return true for empty array", () => {
    expect(isEmpty([])).to.be.true;
  });

  it("should return true for an empty string", () => {
    expect(isEmpty("")).to.be.true;
  });

  it("should return true for an empty object", () => {
    expect(isEmpty({})).to.be.true;
  });

  it("should return true for an empty Map", () => {
    expect(isEmpty(new Map())).to.be.true;
  });

  it("should return true for an empty Set", () => {
    expect(isEmpty(new Set())).to.be.true;
  });

  //--------------------Tests for non-empty values--------------------
  it("should return false for a non-empty array", () => {
    expect(isEmpty([1, 2, 3])).to.be.false;
  });

  it("should return false for a non-empty string", () => {
    expect(isEmpty("abc")).to.be.false;
  });

  it("should return false for an object with properties", () => {
    expect(isEmpty({ a: 1 })).to.be.false;
  });

  it("should return false for a Map with entries", () => {
    const map = new Map().set("key", "value");
    expect(isEmpty(map)).to.be.false;
  });

  it("should return false for a Set with values", () => {
    const set = new Set([1, 2, 3]);
    expect(isEmpty(set)).to.be.false;
  });

  //--------------------Tests for edge cases--------------------
  it("should return true for null", () => {
    expect(isEmpty(null)).to.be.true;
  });

  it("should return true for an empty object with custom prototype", () => {
    const obj = Object.create(null);
    expect(isEmpty(obj)).to.be.true;
  });

  it("should return false for an object with prototype properties", () => {
    function CustomObject() {
      this.property = "value";
    }
    expect(isEmpty(new CustomObject())).to.be.false;
  });

  it("should return false for a sparse array", () => {
    const sparseArray = [];
    sparseArray[2] = "value";
    expect(isEmpty(sparseArray)).to.be.false;
  });
});
