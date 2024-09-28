function gcd(num1,num2){
    let arrayDivisors=[];

    for (let i = 0; i < 15; i++) {
        if(num1%i===0 && num2%i===0){
            arrayDivisors.push(i);
        }
    }
    let sorted=arrayDivisors.sort((a,b)=>b-a);

    console.log(sorted[0]);
} 
gcd(2154, 458);