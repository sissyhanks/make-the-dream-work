const Intern = require("../lib/intern");

describe("Intern", () =>{
  const name = "Rick";
  const id = 1999;
  const email = "rick@rick.com";
  const school = "Top School";
  const testIntern = new Intern(name, id, email,  school)
  it("returns an object", () => {
      expect(typeof(new Intern())).toBe("object");
  });
  it("returns intern's name as string", () => {
    expect(testIntern.name).toBe("Rick");
    expect(typeof(testIntern.name)).toBe("string");
  });
});
