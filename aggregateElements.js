function agregateEl(array){
    let totalSum=0;
    let inversed=0;
    let concat='';

    for (let i = 0; i < array.length; i++) {
        totalSum+=array[i];
        inversed+= 1/array[i];
        concat+=array[i]+'';
    }
    console.log(totalSum);
    console.log(inversed);
    console.log(concat);
}
agregateEl([1,2,3]);