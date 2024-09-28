function sumOfNums(string1,string2){
    let num1=Number(string1);
    let num2=Number(string2);
    let total=0;
    for (let i = num1; i <= num2; i++) {
        total+=i;
    }
    console.log(total);
}
sumOfNums('1','5');