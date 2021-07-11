const Employee = require("../lib/employee");

describe("Employee", () =>{
  it("Returns an object", () => {
    expect(typeof(new Employee())).toBe("object");
  });
  it("generates name", () => {
      const name = "Carmen";
    expect(new Employee(name).name).toBe(name);
  });
  it("generates id number", () => {
    const name = "Carmen";
    const id = 55434;
    expect(new Employee(name, id).id).toBe(id);
  });
  it("generates email", () => {
    const name = "Carmen";
    const id = 55434;
    const email = "car@men.com";
    expect(new Employee(name, id, email).email).toBe(email);
  });
  it("generates role", () => {
    const name = "Carmen";
    const id = 55434;
    const email = "car@men.com";
    expect(new Employee(name, id, email).role).toBe("Employee");
  });
  it("returns name on getName function being called", () => {
    const name = "Carmen";
    const id = 55434;
    const email = "car@men.com";
    const testEmployee = new Employee(name, id, email);
    expect(testEmployee.getName()).toBe("Carmen");
  });
  it("returns id on getId functions being called", () => {
    const name = "Carmen";
    const id = 55434;
    const email = "car@men.com";
    const testEmployee = new Employee(name, id, email);
    expect(testEmployee.getId()).toBe(id);
  });
  it("returns email on getEmail function being called", () => {
    const name = "Carmen";
    const id = 55434;
    const email = "car@men.com";
    const testEmployee = new Employee(name, id, email);
    expect(testEmployee.getEmail()).toBe(email);
  });
  it("returns 'Employee' default when getRole function is called", () => {
    const name = "Carmen";
    const id = 55434;
    const email = "car@men.com";
    const testEmployee = new Employee(name, id, email);
    expect(testEmployee.getRole()).toBe("Employee");
  });
});