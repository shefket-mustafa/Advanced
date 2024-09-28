function sameNumbers2(number){
    
    let isSame=true;
    let sum=0;

    let num = number.toString().split("").map(Number).forEach((x,i,self) => {
        if(x !== self[0] ){
            isSame=false;
        }
        sum+=x;
    });
    console.log(isSame);
    console.log(sum);
    
}
sameNumbers2(22222221);