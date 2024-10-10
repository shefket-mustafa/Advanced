    const isOddOrEven = require('./evenOrOdd');
    const expect = require('chai').expect;

    describe('Unit testing',()=>{
        //invalid input tests
        it('testing with non string input to return undefined',()=>{

            expect(isOddOrEven(5)).to.be.undefined;
        })

        it('testing with array input to return undefined',()=>{

            expect(isOddOrEven([])).to.be.undefined;
        })

        it('testing with object input to return undefined',()=>{

            expect(isOddOrEven({})).to.be.undefined;
        })



        //valid input tests
        it('testing with string input with even length',()=>{

            expect(isOddOrEven('baba')).to.equal('even');
        })

        it('testing with string input with odd length',()=>{

            expect(isOddOrEven('bab')).to.equal('odd');
        })

        it('testing with string input with multiple strings',()=>{

            expect(isOddOrEven('oddasak')).to.equal('odd');
            expect(isOddOrEven('oddasaki')).to.equal('even');
            expect(isOddOrEven('oddasa')).to.equal('even');
            expect(isOddOrEven('odda5')).to.equal('odd');
            expect(isOddOrEven('od')).to.equal('even');
        })



    })