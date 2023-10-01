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

  it("Should support typeof operator", () => {
    function process(value: number | string | Boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("Maulana")).toBe("MAULANA");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
