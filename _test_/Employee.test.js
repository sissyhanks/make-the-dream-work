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
  it("generates id number", () => {
    const name = "Carmen";
    const id = 55434;
    expect(new Employee(name, id).id).toBe(id);
  });
  it("returns id number as a number", () => {
    const name = "Carmen";
    const id = 55434;
    expect(typeof(new Employee(name, id).id)).toBe("number");
  });
  it("generates email", () => {
    const name = "Carmen";
    const id = 55434;
    const email = "car@men.com";
    expect(new Employee(name, id, email).email).toBe(email);
  });
  // it("only accepts entries that are in acceptable email formats", () => {
  //   const name = "Carmen";
  //   const id = 55434;
  //   const email = "car@men.com";
  // })
  it("generates role", () => {
    const name = "Carmen";
    const id = 55434;
    const email = "car@men.com";
    expect(new Employee(name, id, email).role).toBe("Employee");
  });
});