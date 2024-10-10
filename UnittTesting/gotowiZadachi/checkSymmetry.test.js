const expect = require("chai").expect;
const isSymmetric = require("./checkSymmetry");

describe("Unit testing", () => {

  it("Should return true on odd nums", () => {
    expect(isSymmetric([1, 2, 1])).to.be.true;
  });

  it("Should return false on wrong odd nums", () => {
    expect(isSymmetric([1, 2, -1])).to.be.false;
  });

  it("Should return true on even nums", () => {
    expect(isSymmetric([10, 20, 20, 10])).to.be.true;
  });

  it("Should return false on wrong even nums", () => {
    expect(isSymmetric([10, 20, 30, 10])).to.be.false;
  });

  it("Should return true on symmetric strings", () => {
    expect(isSymmetric(["pesho", "gosho", "gosho", "pesho"])).to.be.true;
  });
  it("Should return false on assymetric strings", () => {
    expect(isSymmetric(["pesho", "gosho", "pesho1", "gosho"])).to.be.false;
  });

  it("Should return true on one item", () => {
    expect(isSymmetric([2])).to.be.true;
  });

  it("Should return true on empty array", () => {
    expect(isSymmetric([])).to.be.true;
  });
  it("Should return false on string instead of []", () => {
    expect(isSymmetric("mqu")).to.be.false;
  });

  it("Should return false on number instead []]", () => {
    expect(isSymmetric(2)).to.be.false;
  });

  it("Should return false on number instead []]", () => {
       expect(isSymmetric(2)).to.be.false;
     });

     it("Should return false on null input", () => {
       expect(isSymmetric(null)).to.be.false;
   });

   it("Should return false on object input", () => {
       expect(isSymmetric({})).to.be.false;
   });

   it("Should return false on undefined input", () => {
       expect(isSymmetric(undefined)).to.be.false;
   });

   it("Should return false on nested arrays", () => {
       expect(isSymmetric([[1, 2], [2, 1]])).to.be.false;
     });

     it("Should return false on mixed input ", () => {
       expect(isSymmetric(["2" , 2])).to.be.false;
     });
  
});
