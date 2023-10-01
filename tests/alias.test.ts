import { Category, Product } from "../src/alias";

describe("Alias", function () {
  it("should support alias in typescript", function () {
    const category: Category = {
      id: 1,
      name: "buku",
      description: "buku untuk belajar",
    };

    const product: Product = {
      id: "1",
      name: "harry potter",
      price: 100000,
      category,
    };

    console.info(category);
    console.info(product);

    expect(category).toEqual({
      id: 1,
      name: "buku",
    });
    expect(product).toEqual({
      id: 1,
      name: "harry potter",
      price: 100000,
      category,
    });
  });
});
