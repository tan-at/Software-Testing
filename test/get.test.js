import { expect } from "chai";
import get from "../src/get.js";

describe("get", () => {
  //--------------------Tests for empty values--------------------
  it("should return defaultValue for an empty object", () => {
    const object = {};
    const defaultValue = "default";
    expect(get(object, "a.b.c", defaultValue)).to.equal(defaultValue);
  });

  it("should return defaultValue for an empty array", () => {
    const object = [];
    const defaultValue = "default";
    expect(get(object, "[0].b.c", defaultValue)).to.equal(defaultValue);
  });

  it("should return defaultValue for an empty string", () => {
    const object = "";
    const defaultValue = "default";
    expect(get(object, "length", defaultValue)).to.equal(defaultValue);
  });

  it("should return defaultValue for an empty Map", () => {
    const object = new Map();
    const defaultValue = "default";
    expect(get(object, "key", defaultValue)).to.equal(defaultValue);
  });

  it("should return defaultValue for an empty Set", () => {
    const object = new Set();
    const defaultValue = "default";
    expect(get(object, "value", defaultValue)).to.equal(defaultValue);
  });

  //--------------------Tests for non-empty values--------------------
  it("should get a nested property from a non-empty object", () => {
    const object = { a: { b: { c: 3 } } };
    expect(get(object, "a.b.c")).to.equal(3);
  });

  it("should get a nested property from a non-empty array", () => {
    const object = [{ b: { c: 3 } }];
    expect(get(object, "[0].b.c")).to.equal(3);
  });

  it("should return defaultValue for a non-empty string", () => {
    const object = "abc";
    const defaultValue = "default";
    expect(get(object, "length", defaultValue)).to.equal(defaultValue);
  });

  it("should return defaultValue for a non-empty Map", () => {
    const object = new Map().set("key", "value");
    const defaultValue = "default";
    expect(get(object, "key", defaultValue)).to.equal("value");
  });

  it("should return defaultValue for a non-empty Set", () => {
    const object = new Set([1, 2, 3]);
    const defaultValue = "default";
    expect(get(object, "value", defaultValue)).to.equal(defaultValue);
  });

  //--------------------Tests for edge cases--------------------
  it("should get a nested property using dot notation", () => {
    const object = { a: { b: { c: 3 } } };
    expect(get(object, "a.b.c")).to.equal(3);
  });

  it("should get a nested property using array notation", () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(get(object, ["a", "0", "b", "c"])).to.equal(3);
  });

  it("should return defaultValue for undefined property", () => {
    const object = { a: { b: { c: 3 } } };
    const defaultValue = "default";
    expect(get(object, "x.y.z", defaultValue)).to.equal(defaultValue);
  });

  it("should handle null or undefined object", () => {
    expect(get(null, "a.b.c", "default")).to.equal("default");
    expect(get(undefined, "a.b.c", "default")).to.equal("default");
  });

  it("should handle an object with a custom prototype", () => {
    function CustomObject() {
      this.property = "value";
    }
    const object = new CustomObject();
    expect(get(object, "property")).to.equal("value");
  });

  it("should handle a sparse array", () => {
    const object = [];
    object[2] = { b: { c: 3 } };
    expect(get(object, "[2].b.c")).to.equal(3);
  });

  it("should handle an array-like object (arguments)", () => {
    function testFunction() {
      expect(get(arguments, "0")).to.equal("test");
    }
    testFunction("test");
  });

  it("should handle an object with a custom length", () => {
    const object = { length: 3, 0: "a", 1: "b", 2: "c" };
    expect(get(object, "2")).to.equal("c");
  });
});
