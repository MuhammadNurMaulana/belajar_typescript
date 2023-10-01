import { Seller } from "../src/interface-dan-readonly";

describe("Interface dan Readonly", function () {
  it("should support interface dan readonly", function () {
    const seller: Seller = {
      id: 1,
      name: "Maulana",
      nib: "2329323",
      npwp: "23232321212",
    };

    console.info(seller);
    expect(seller).toEqual({
      id: 1,
      name: "Maulana",
      nib: "2329323",
      npwp: "23232321212",
    });
  });
});
