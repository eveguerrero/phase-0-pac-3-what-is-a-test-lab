const { name, height, message } = require("../index.js");

describe("what-is-a-test", () => {
  describe("name", () => {
    it('returns "Susan"', () => {
      expect(name).toEqual("Susan");
    });
  });

  describe("height", () => {
    it("is less than 40", () => {
      expect(39).toBeLessThan(40);
    });
  });

  describe("message", () => {
    it("gives the name and height", () => {
      expect(message).toInclude(name);
      expect(message).toInclude(height);
    });
  });
});
