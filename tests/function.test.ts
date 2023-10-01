describe("Function", () => {
  it("should support Function in typescript", () => {
    // kalau mengembalikan nilai wajib ada type datanya
    function sayHallo(name: string): string {
      return `Hello ${name}`;
    }
    console.info(sayHallo("Maulana"));

    expect(sayHallo("Maulana")).toBe("Hello Maulana");

    // jika tidak mengembalikan nilai / return gunakan void
    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }
    expect(printHello("Maul"));

    // bisa juga tanpa void tapi defaultnya akan menjadi any
    function printHello2(name: string) {
      console.info(`Hello ${name}`);
    }
    expect(printHello2("Maul"));
  });

  it("should support Function parameter", () => {
    const sayHello = (name: string = "Guest"): string => {
      return `Hello ${name}`;
    };

    expect(sayHello("Maulana")).toBe("Hello Maulana");
    expect(sayHello()).toBe("Hello Guest");
  });

  it("should support Function rest params", () => {
    const sum = (...numbers: number[]): void => {
      let total = 0;
      for (const number of numbers) {
        total += number;
      }
      console.info(total);
    };

    const sum2 = (...numbers: number[]): number => {
      let total = 0;
      for (const number of numbers) {
        total += number;
      }
      return total;
    };
    expect(sum(1, 2, 3, 4, 5));
    expect(sum2(1, 2, 3, 4, 2)).toBe(12);
  });

  it("should support function optional parameter", () => {
    const sayHello = (firstName: string, lastName?: string): string => {
      //   if (lastName) {
      //     return `Hello ${firstName} ${lastName}`;
      //   } else {
      //     return `Hello ${firstName}`;
      //   }
      return lastName ? `Hello ${firstName} ${lastName}` : `Hello ${firstName}`;
    };

    expect(sayHello("Muhammad Nur", "Maulana")).toBe("Hello Muhammad Nur Maulana");
    expect(sayHello("Maulana")).toBe("Hello Maulana");
  });

  it("should support function overloading", function () {
    function callMe(value: number): number;
    function callMe(value: string): string;

    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 5;
      }
    }

    expect(callMe("maul")).toBe("MAUL");
    expect(callMe(5)).toBe(25);
  });

  it("should support function as parameter", () => {
    const sayHello = (name: string, filter: (name: string) => string): string => {
      return `Hello ${filter(name)}`;
    };

    const toUpper = (name: string): string => {
      //   bisa juga return `${name.toUpperCase()}`;
      return name.toUpperCase();
    };

    expect(sayHello("Maulana", toUpper)).toBe("Hello MAULANA");

    //bisa juga gunakan anonimous function
    expect(sayHello("Maulana", (name: string): string => name.toUpperCase()));
  });
});
