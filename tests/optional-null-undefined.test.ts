describe("Optional Null dan Undefined", function () {
  it("should optional null and undefined", function () {
    // di typescript null adalah type data maka harus ada | null nya
    function sayHello(name?: string | null) {
      name ? console.info(`Hello ${name}`) : console.info("Hello");
    }

    sayHello("Maulana");

    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(name); //use type data null
  });
});
