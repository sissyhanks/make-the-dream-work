const Employee = require("../lib/employee");

describe("Employee", () =>{
  it("Returns an object", () => {
    expect(typeof(new Employee())).toBe("object");
  });
  it("generates name", () => {
      const name = "Carmen";
    expect(new Employee(name).name).toBe(name);
  });
  it("returns the name as a string", () => {
    const name = "Carmen";
    expect(typeof(new Employee(name).name)).toBe("string");
  });
});