function biggerHalf(array){

    let sorted=array.sort((a,b)=> a-b);
    let middle = sorted.length/2;
    let firstPart=sorted.slice(0,middle)
    let secondPart=sorted.slice(middle);
    if(middle%2!==0){
    if(firstPart.length>secondPart.length){
        return firstPart;
    } else {
       
        return secondPart;
    }
    } else  {
        return secondPart;
    }
}
biggerHalf([3, 19, 14, 7, 2, 19, 6,6]);