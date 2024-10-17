const { describe } = require("mocha");
const library = require("./library.js");
let { expect } = require("chai");

// yesss wee nai nakraq 100/100

describe("Library Tests", function () {

  describe("CalcBookPrice tests", function () {
    it("Invalid inputs - name of the book", function () {
      expect(() => library.calcPriceOfBook(5, 1999)).to.throw(// w expect trqbwa taka s wlojena funkciq da izwikame metoda ne moje direktno
        Error,
        "Invalid input"
      ); 
    });
    it("Invalid inputs - year", function () {
      expect(() => library.calcPriceOfBook("5", "5")).to.throw(
        Error,
        "Invalid input"
      );
    });
    it("Valid data and year below 1980", function () {
      expect(library.calcPriceOfBook("The Little Prince", 1943)).to.be.equal(
        `Price of The Little Prince is 10.00`
      );
    });
    it("Valid data and year equal to 1980", function () {
      expect(library.calcPriceOfBook("The Little Prince", 1980)).to.be.equal(
        `Price of The Little Prince is 10.00`
      );
    });
    it("Valid data and year more than 1980", function () {
        expect(library.calcPriceOfBook("The Little Prince", 1985)).to.be.equal(
          `Price of The Little Prince is 20.00`
        );
      });
    });


    describe("findBook Tests", function () {

      it("if length of books.arr is 0 throw error", () => {
        expect(() => library.findBook([], "haha")).to.throw(Error,"No books currently available");
    });

      it("Check if desiredBook is not in array", () => {
          expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Tasho')).to.equal("The book you are looking for is not here!");
        })
        it("Check if the desired book is in array", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.equal("We found the book you want.")
        })
      
    });

    describe("Arrange the books tests", function () {
      it("Validating input - check if input is not an integer", () => {
        expect(() => library.arrangeTheBooks(5.2)).to.throw(Error,"Invalid input"); // w expectite koito trqbwa da throw-nat greshka slagame arrow expr po tozi nachin zashtoto
        // ako slojim kudrawi skobi tozi scope trqbwa da wurne neshto w sluchaq nqma nujda 
      });

      it("Validating input - check if input is string", () => {
        expect(() => library.arrangeTheBooks('5.2')).to.throw(Error,"Invalid input");
      });

      it("Validating input - check if input is a negative number", () => {
        expect(() => library.arrangeTheBooks(-5)).to.throw(Error,"Invalid input"); 
      });

      it("check if there is space on book and print positive output", () => {
          expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        }); 

        it("check if there is space on book and print negative output", () => {
            expect(library.arrangeTheBooks(45)).to.equal("Insufficient space, more shelves need to be purchased.");
          })
        
        
      });
    });
  

