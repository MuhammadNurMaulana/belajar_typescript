describe("Looping", () => {
  it("should support for loop", () => {
    const names = ["Maulana", "Fachri", "Dani", "Bintang"];
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
});
