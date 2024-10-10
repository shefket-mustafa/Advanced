const rgbToHexColor = require("./rgbToHexa");
const expect = require('chai').expect;

describe(" Rgb to Hexa ",()=>{
    
  it("'255,0,0' should return '#FF0000' ", ()=>{
    expect(rgbToHexColor(255,0,0)).to.equal('#FF0000');
  })

  it("'0,255,0' should return '#00FF00' ", ()=>{
    expect(rgbToHexColor(0,255,0)).to.equal('#00FF00');
  })

  it(" '0,0,255' should return '#0000FF' ", ()=>{
    expect(rgbToHexColor(0,0,255)).to.equal('#0000FF');
  })

  it(" '0,0,0' should return '#000000' ",()=>{
    expect(rgbToHexColor(0,0,0)).to.equal('#000000');
  })

  it("Invalid red values ", ()=>{
    expect(rgbToHexColor(-1,0,0)).to.be.undefined;
    expect(rgbToHexColor(256,0,0)).to.be.undefined;
  })

  it("Invalid green values ",()=>{
    expect(rgbToHexColor(0,-1,0)).to.be.undefined;
    expect(rgbToHexColor(0,256,0)).to.be.undefined;
  })

  it("Invalid blue values ",()=>{
    expect(rgbToHexColor(0,0,-1)).to.be.undefined;
    expect(rgbToHexColor(0,0,256)).to.be.undefined;
  })

});