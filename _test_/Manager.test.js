const Manager = require("../lib/manager");

describe("Manager", () =>{
  const officeNumber = 7734;
  const testManager = new Manager("Bob", 123, "bob@bob.com", "manager", officeNumber);
  
  it("Returns an object", () => {
      expect(typeof(testManager)).toBe("object");
  });
  it("generates office number", () => {
    expect(testManager.officeNumber).toBe(officeNumber);
  });
  it("returns office number as number", () => {
    expect(typeof(testManager.officeNumber)).toBe("number");
  });
  it("returns name", () => {
    expect(testManager.name).toBe("Bob");
  });
  it("returns id", () => {
    expect(testManager.id).toBe(123);
  });
  it("returns email", () => {
    expect(testManager.email).toBe("bob@bob.com");
  });
  it("returns roll", () => {
    expect(testManager.roll).toBe("manager");
  });
});