function largestNum(num1,num2,num3){
    let numberArray=[num1,num2,num3];
    
    let numbers=numberArray.sort((a,b)=> b-a);
    let number=numbers[0];
    

    console.log(`The largest number is ${number}.`);
}
largestNum(5, -3, 16)