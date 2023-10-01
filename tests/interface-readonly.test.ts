import { Employee, Manager } from "../src/extend-employee";
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

    seller.name = "Maul"; //bisa diubah

    // seller.nib = "2dadasdsads"; //tidak bisa diubah karena menggunakan readyonly
    console.info(seller);

    console.info(seller);
    expect(seller).toEqual({
      id: 1,
      name: "Maul",
      nib: "2329323",
      npwp: "23232321212",
    });
  });

  it("should support function interface", function () {
    interface addFunction {
      (value1: number, value2: number): number;
    }

    const add: addFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(5, 10)).toBe(15);
  });

  it("should support indexable interface use number ", () => {
    interface numberArray {
      [index: number]: string; //bisa juga valuenya number dll
    }

    const name: numberArray = ["Maul", "Fachri", "Dani", "Bintang"];
    console.info(name);
    console.info(name[0]);
    console.info(name[1]);
    console.info(name[2]);
    console.info(name[3]);
  });

  it("should support indexable interface use string || not number", function () {
    interface stringArray {
      [key: string]: string | number;
    }

    const dictionary: stringArray = {
      name: "Maulana",
      address: "Jakarta",
      age: 21,
    };

    console.info(dictionary);
    console.info(dictionary.name); // bisa juga gunakan ["name"]
    console.info(dictionary.address); // bisa juga gunakan ["address"]
    console.info(dictionary.age); // bisa juga gunakan ["age"]
  });

  it("should support extends in interface typescript", function () {
    const employee: Employee = {
      id: 1,
      name: "Maul",
      division: "IT",
    };

    const manager: Manager = {
      id: 2,
      name: "Maulana",
      division: "IT",
      numberOfEmployes: 10,
    };

    console.info(employee);
    console.info(manager);
  });

  it("should support Function in interface", () => {
    interface Person {
      name: string;
      sayHello(name: string | number): string;
    }

    const person: Person = {
      name: "Maulana",
      sayHello: function (name: string | number): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Budi"));
    console.info(person.sayHello(20));
  });
});
