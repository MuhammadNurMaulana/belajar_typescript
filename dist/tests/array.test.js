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
});
