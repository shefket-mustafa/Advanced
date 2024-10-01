function firstLast(array){
    let sum = Number(array.shift()) + Number(array.pop());
    console.log(sum);

}
firstLast(['20', '30', '40']);