function sameNumbers(number){
    
    let numberToString=number.toString().split("");
    let check = numberToString.every(digit=> digit===numberToString[0]);
    let sum=numberToString.reduce((a,b)=> a+Number(b),0);

    console.log(check);
    console.log(sum);
}
sameNumbers(2222222);