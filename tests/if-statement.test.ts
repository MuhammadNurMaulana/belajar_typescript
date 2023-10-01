describe("IF STATEMENT", function () {
  it("should support if statement", function () {
    const examValue = 90;

    if (examValue >= 80) {
      console.info("good job");
    } else if (examValue >= 70) {
      console.info("not bad");
    } else {
      console.info("try again");
    }
  });

  it("should support ternary operator", () => {
    const value = 90;

    value >= 70 ? console.info("Congratulations") : console.info("Try again");
  });
});
