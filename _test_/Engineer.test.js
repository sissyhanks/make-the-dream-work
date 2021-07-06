const Engineer = require("../lib/engineer");

describe("Engineer", () =>{
  const name = "Donna";
  const id = 227;
  const email = "Donna@donna.com";
  const role = "engineer";
  const git = "gitdonna";
  const testEngineer = new Engineer(name, id, email, role, git);
  it("Returns an object", () => {
    expect(typeof(new Engineer())).toBe("object");
  });
  it("generates gitHub username that is a string", () => {
    expect(testEngineer.git).toBe(git);
    expect(typeof(testEngineer.git)).toBe("string");
  });
  it("generates name", () => {
    expect(testEngineer.name).toBe(name);
  });
  it("generates id", () => {
    expect(testEngineer.id).toBe(id);
  });
  it("generates email", () => {
    expect(testEngineer.email).toBe(email);
  });
  it("generates role", () => {
    expect(testEngineer.role).toBe(role);
  });
});