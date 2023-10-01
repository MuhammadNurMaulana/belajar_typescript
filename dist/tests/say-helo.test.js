import { sayHello } from "../src/say-helo";
describe("SayHello", () => {
    it("should return Hello Maul", () => {
        expect(sayHello("Maul")).toBe("Hello Maul");
    });
});
