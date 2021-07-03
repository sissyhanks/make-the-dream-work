const Engineer = require("../lib/engineer");

describe("Engineer", () =>{
  it("Returns an object", () => {
    expect(typeof(new Engineer())).toBe("object");
  });
});