const Manager = require("../lib/manager");

describe("Manager", () =>{
  it("Returns an object", () => {
      expect(typeof(new Manager())).toBe("object");
  });
});