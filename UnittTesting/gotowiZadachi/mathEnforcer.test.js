const mathEnforcer = require('./mathEnforcer');
const expect = require('chai').expect;


describe('Unit testing MathEnforxer',()=>{


describe('Unit testing function addFive()',()=>{
    //test invalid
    it('Returning undefined if the param is not a number',()=>{
        expect(mathEnforcer.addFive('5')).to.be.undefined;
    })

    it('Returning undefined if the param is empty string',()=>{
        expect(mathEnforcer.addFive('')).to.be.undefined;
    })

    it('Returning undefined if the param is null',()=>{
        expect(mathEnforcer.addFive(null)).to.be.undefined;
    })

    it('Returning undefined if the param is nuobjll',()=>{
        expect(mathEnforcer.addFive({})).to.be.undefined;
    })

    it('Returning undefined if the param is arr',()=>{
        expect(mathEnforcer.addFive([])).to.be.undefined;
    })

    it('Returning undefined if the param is und',()=>{
        expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    })

    //test valid
    it('Returning +5 if valid integer number',()=>{
            
        expect(mathEnforcer.addFive(5)).to.equal(10);
    })

    it('Returning +5 if valid  negative number',()=>{
            
        expect(mathEnforcer.addFive(-5)).to.equal(0);
    })

    it('Returning +5 if valid decimal number',()=>{
            
        expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
    })

    
})

describe('Unit testing function subtractTen()',()=>{

    it('Returning undefined if the param is not a number',()=>{
        expect(mathEnforcer.subtractTen('5')).to.be.undefined;
    })

    it('Returning undefined if the param is empty string',()=>{
        expect(mathEnforcer.subtractTen('')).to.be.undefined;
    })

    it('Returning undefined if the param is null',()=>{
        expect(mathEnforcer.subtractTen(null)).to.be.undefined;
    })

    it('Returning undefined if the param is obj',()=>{
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
    })

    it('Returning undefined if the param is arr',()=>{
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
    })


    it('Returning -10 if valid number',()=>{
        
    expect(mathEnforcer.subtractTen(10)).to.equal(0);
})

it('Returning for valid negative',()=>{
    expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
})






})

describe('Unit testing function sum()',()=>{
    //invalid
    it('Returning undefined if one of the param is not a number',()=>{
        expect(mathEnforcer.sum('5',5)).to.be.undefined;
    })

    it('Returning undefined if one of the param is not a number',()=>{
        expect(mathEnforcer.sum(5,'5')).to.be.undefined;
    })

    it('Returning undefined if one of the param is not a number',()=>{
        expect(mathEnforcer.sum('',5)).to.be.undefined;
    })


    it('Returning undefined if one of the param is not a number',()=>{
        expect(mathEnforcer.sum(5,'')).to.be.undefined;
    })

    it('Returning undefined if one of the param is not a number',()=>{
        expect(mathEnforcer.sum('5',5)).to.be.undefined;
    })

    it('Returning undefined if one of the param is not a number',()=>{
        expect(mathEnforcer.sum([],5)).to.be.undefined;
    })

    it('Returning undefined if one of the param is not a number',()=>{
        expect(mathEnforcer.sum(5,[])).to.be.undefined;
    })

    it('Returning undefined if one of the param is not a number',()=>{
        expect(mathEnforcer.sum([],[])).to.be.undefined;
    })

    it('Returning undefined if one of the param is not a number',()=>{
        expect(mathEnforcer.sum({},5)).to.be.undefined;
    })

    it('Returning undefined if one of the param is not a number',()=>{
        expect(mathEnforcer.sum(5,{})).to.be.undefined;
    })

    it('Returning undefined if one of the param is not a number',()=>{
        expect(mathEnforcer.sum({},{})).to.be.undefined;
    })

    it('Returning undefined if one of the param is not a number',()=>{
        expect(mathEnforcer.sum(5)).to.be.undefined;
    })



    //valid
    it('Returning sum if both nums are valid',()=>{
        expect(mathEnforcer.sum(5,5)).to.equal(10);
    })

    it('Returning sum if both nums are valid',()=>{
        expect(mathEnforcer.sum(5.5 , 5)).to.equal(10.5);
    })

    it('Returning sum if both nums are valid',()=>{
        expect(mathEnforcer.sum(5.4, 5.5)).to.equal(10.9);
    })

    it('Returning sum if both nums are valid',()=>{
        expect(mathEnforcer.sum(5 , 5.5)).to.equal(10.5);
    })

    it('Returning sum if both nums are valid',()=>{
        expect(mathEnforcer.sum(-10 , -2.5)).to.equal(-12.5);
    })

    





    
})
})
