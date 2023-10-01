describe("Looping", () => {
  it("should support for loop", () => {
    const names: string[] = ["Maulana", "Fachri", "Dani", "Bintang"];
    // for
    for (let i = 0; i < names.length; i++) {
      console.info(names[i]);
    }

    // for of
    for (const name of names) {
      console.info(name);
    }

    // for in
    for (const name in names) {
      console.info(names[name]);
    }
  });

  it("should support while loop", () => {
    let counter: number = 0;

    while (counter <= 10) {
      console.log(counter);
      counter++;
    }
  });

  it("should support do while loop", () => {
    let counter: number = 0;

    do {
      console.log(counter);
      counter++;
    } while (counter <= 10);
  });
});
