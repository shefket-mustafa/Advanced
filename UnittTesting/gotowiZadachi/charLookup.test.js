    const lookupChar = require('./charLookup');
    const expect = require('chai').expect;

    describe('Unit testing',()=>{


            //valid string inputs
        it('Return char at index',()=>{
            expect(lookupChar('Love',1)).to.equal('o');
        })

        it('Return incorrect  bigger than string length index',()=>{
            expect(lookupChar('Love',10)).to.equal('Incorrect index');
        })

        it('Return incorrect  for empty string',()=>{
            expect(lookupChar('',10)).to.equal('Incorrect index');
        })

        it('Return incorrect equal to length index ',()=>{
            expect(lookupChar('Love',4)).to.equal('Incorrect index');
        })

        it('Return incorrect negative index ',()=>{
            expect(lookupChar('Love',-4)).to.equal('Incorrect index');
        })

        it('Return char at index',()=>{
            expect(lookupChar('L',0)).to.equal('L');
        })





        //invalid first input (string) testing 
        it('Return undefined if the first param is not a string ',()=>{
            expect(lookupChar(4,4)).to.be.undefined;
        })

        it('Check if first param is string and second is decimal ',()=>{
            expect(lookupChar('uaua',4.2)).to.be.undefined;
        })

        it('Check if string is valid ',()=>{
            expect(lookupChar([],4)).to.be.undefined;
        })

        it('Check if string is valid ',()=>{
            expect(lookupChar({},4)).to.be.undefined;
        })

        it('Check if string is valid ',()=>{
            expect(lookupChar(undefined,4)).to.be.undefined;
        })

        //invalid second input(number) testing

        it('Check if number is valid ',()=>{
            expect(lookupChar(4,'4')).to.be.undefined;
        })

        it('Check if number is valid ',()=>{
            expect(lookupChar(4,[])).to.be.undefined;
        })

        it('Check if number is valid ',()=>{
            expect(lookupChar(4,{})).to.be.undefined;
        })

        it('Check if number is valid ',()=>{
            expect(lookupChar(4,undefined)).to.be.undefined;
        })

        it('Check if number is valid ',()=>{
            expect(lookupChar(4,null)).to.be.undefined;
        })
    })
