describe("Object", () => {
  it("should object in typescript", () => {
    const person: { id: string; name: string; hobbies?: string[] } = {
      id: "1",
      name: "Maulana",
      hobbies: ["Coding", "Gaming"],
    };

    console.log(person);
  });
});
