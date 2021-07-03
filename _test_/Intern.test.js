const Intern = require("../lib/intern");

describe("Intern", () =>{
  it("returns an object", () => {
      expect(typeof(new Intern())).toBe("object");
  });
});
