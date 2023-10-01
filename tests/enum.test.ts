import { Customer, CustomerType } from "../src/enum";

describe("Enum", () => {
  it("should enum in typescript", () => {
    const customer: Customer = {
      id: 1,
      name: "Maulana",
      type: CustomerType.REGULAR,
    };

    console.info(customer);
  });
});
