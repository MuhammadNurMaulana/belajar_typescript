"use strict";
describe("Array", () => {
    it("should array in typescript", () => {
        const names = ["Maul", "Fachri", "Dani", "Bintang"];
        const values = [1, 2, 3, 4];
        console.info(names);
        console.info(values);
        expect(names).toEqual(["Maul", "Fachri", "Dani", "Bintang"]);
        expect(values).toEqual([1, 2, 3, 4]);
    });
    //   ReadOnlyAray  data arraynya hanya bisa dibaca tidak bisa dirubah
    it("Should support ReadOnlyArray", () => {
        const hobbies = ["Maul", "Fachri", "Dani", "Bintang"];
        console.log(hobbies); //bisa dibaca
        console.log(hobbies[0]); //bisa dibaca
        // hobbies[0] = "Muhammad Nur Maulana" // tetapi tidak bisa dirubah
    });
    //   Tuple adalah array yang jumlah dan type datanya sudah di tentukan dan tidak bisa dirubah seperti ReadOnlyArray
    it("Should turn array into tuple", () => {
        const person = ["Maul", "Fachri", 21];
        console.log(person);
        console.log(person[0]);
        console.log(person[1]);
        console.log(person[2]);
    });
});
