// const assert = require('assert').strict;
const expect = require("chai").expect;
const solve = require("./subSum");

describe("Sub-sum Calculator", () => {
  it("Should calculate sub-sum when endIndex is larger than length", () => {
    //Arange
    let expectedSum = 150;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;

    //Act

    let actualSum = solve(numbers, startIndex, endIndex);

    //Assert

    //   assert.equal(actualSum,expectedSum);
    expect(actualSum).to.equal(expectedSum);
  });

  it("Should calculate sub-sub when startIndex is lower than zero", () => {
    //Arange
    let expectedSum = 60;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = -100;
    let endIndex = 2;

    //Act

    let actualSum = solve(numbers, startIndex, endIndex);

    //Assert

    //   assert.equal(actualSum,expectedSum);
    expect(actualSum).to.equal(expectedSum);
  });
});

it("Should return NaN if non array is provided for first argument", () => {
  let actualSum = solve(10, 1, 2);

  //Assert

  // assert.equal(actualSum,NaN);
  expect(solve(10 , 1 , 2)).to.be.NaN;
  expect(solve(null , 1 , 2)).to.be.NaN;
  expect(solve(undefined , 1 , 2)).to.be.NaN;
  expect(solve({} , 1 , 2)).to.be.NaN;
  expect(solve(true , 1 , 2)).to.be.NaN;
  expect(solve(false , 1 , 2)).to.be.NaN;
});
