const expect = require('chai').expect;

const sum = require('./sumOfNumbers');

    describe('Sum of numbers', ()=>{
        it('should return the sum of all the numbers from array',()=>{
            let numbers = [1,2,3,4,5];
            
            let actualSum = sum(numbers);
            let expectedSum = 15;

            expect(actualSum).to.equal(expectedSum);
        })

        it('should return the sum with negative number in array',()=>{
            let numbers = [1,2,3,4,-5];
            
            let actualSum = sum(numbers);
            let expectedSum = 5;

            expect(actualSum).to.equal(expectedSum);
        })

        it('should return zero if only zero is given',()=>{
            let numbers = [5];
            
            let actualSum = sum(numbers);
            let expectedSum = 5;

            expect(actualSum).to.equal(expectedSum);
        })
    })