describe("Union Type", () => {
  it("Should support in Typescript", () => {
    let sample: string | number | boolean = "Maulana";
    console.log(sample);
    expect(sample).toBe("Maulana");

    sample = 100;
    console.log(sample);
    expect(sample).toBe(100);

    sample = false;
    console.log(sample);
    expect(sample).toBe(false);
  });
});
