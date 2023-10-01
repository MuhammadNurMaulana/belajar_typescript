import { sayHello } from "../src/say-helo";

describe("SayHello", (): void => {
  it("should return Hello Maul", (): void => {
    expect(sayHello("Maul")).toBe("Hello Maul");
  });
});
