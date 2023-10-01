describe("any", () => {
  it("should support any in typescript", () => {
    const person: any = {
      name: "Maul",
      age: 21,
      study: "Teknik Informatika",
    };

    console.log(person);
    expect(person).toEqual({
      name: "Maul",
      age: 21,
      study: "Teknik Informatika",
    });
  });
});
