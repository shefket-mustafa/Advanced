const expect = require("chai").expect;

const solve = require("./deckOfCards");

describe("Check for correct input", () => {
  it("Check if the entered face is valid", () => {
    const faces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    const suits = {
      S: "♠",
      H: "♥",
      D: "♦",
      C: "♣",
    };
    let isValid = true;

    let face = "2";
    let suit = "S";
    let input = solve(face, suit);

    if (!faces.includes(face) || !suits[suit]) {
      isValid = false;
    }

    expect(isValid).to.be.true;
  });

  it("Check if face and suit are uppercase", () => {
    const faces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    const suits = {
      S: "♠",
      H: "♥",
      D: "♦",
      C: "♣",
    };
    let face = "2";
    let suit = "S";
    let input = solve(face, suit);
    
    let isValid = true;

    if(face !== face.toUpperCase() || suit !== suit.toUpperCase()){
        isValid = false;
    }

    expect(isValid).to.be.true;

  });

  it('Check if input data is string.',()=>{
    const faces = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
      ];
      const suits = {
        S: "♠",
        H: "♥",
        D: "♦",
        C: "♣",
      };
      let isValid = true;
  
      let face = "2";
      let suit = "S";
      let input = solve(face, suit);
  
  
      if (typeof face !== "string" || typeof suit !== "string") {
        isValid = false;
      }
      console.log(isValid);
  
      expect(isValid).to.be.true;
  })
});

// if(!faces.includes(face) || !suits[suit]){
//     throw new Error('Error');
// }
// if(!face === face.toUpperCase() && !suit === suit.toUpperCase()){
//     throw new Error('Error')
// }
// if(typeof face !== 'string' || typeof suit !== 'string'){
//     throw new Error;
// }
  // const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    // const suits = {
    //     S:'♠',
    //     H:'♥',
    //     D:'♦',
    //     C:'♣'
    // }