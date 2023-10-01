describe("Type Data", () => {
  it("should Type Data", () => {
    const name: string = "Muhammad Nur Maulana";
    const age: number = 21;
    const isVip: boolean = true;

    expect(name).toBe("Muhammad Nur Maulana");
    expect(age).toBe(21);
    expect(isVip).toBe(true);
  });
});
