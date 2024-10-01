function biggestEl(array){
    let oneArrayFlatFunction=array.flat();
    let sorted=oneArrayFlatFunction.sort((a,b)=>b-a);
    console.log(sorted[0]);
}
biggestEl([[20, 50, 10],
    [8, 33, 145]])