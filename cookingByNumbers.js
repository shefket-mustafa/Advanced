function cookingByNumbers(number,string1,string2,string3,string4,string5,){
    // chop - divide the number by two
    // dice - square root of a number
    // spice - add 1 to the number
    // bake - multiply number by 3
    // fillet - subtract 20% from the number

    let numbers=Number(number);
    let array=[string1,string2,string3,string4,string5];
    

    for (const cmd of array) {
            if(cmd==='chop'){
                numbers/=2;
                
            } else if(cmd==='dice'){
                numbers=Math.sqrt(numbers);
            } else if(cmd==='spice'){
                numbers++;
            } else if(cmd==='bake'){
                numbers*=3;
            } else if(cmd==='fillet'){
                numbers=numbers-(numbers*0.20);
            }
            console.log(numbers);
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');