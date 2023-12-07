// Import necessary modules
import { expect } from "chai";
import baseClone from "../src/.internal/baseClone.js";

describe("baseClone", () => {
  it("should clone simple objects", () => {
    const input = { a: 1, b: { c: 2 } };
    const cloned = baseClone(input, 1);

    expect(cloned).to.deep.equal(input);
    expect(cloned).to.not.equal(input); // Make sure it's a deep clone
  });

  it("should clone arrays", () => {
    const input = [1, [2, 3], { a: 4 }];
    const cloned = baseClone(input, 1);

    expect(cloned).to.deep.equal(input);
    expect(cloned).to.not.equal(input);
  });

  it("should clone Maps", () => {
    const input = new Map([
      ["a", 1],
      ["b", { c: 2 }],
    ]);

    const cloned = baseClone(input, 1);

    expect(cloned).to.deep.equal(input);
    expect(cloned).to.not.equal(input);
  });
});
