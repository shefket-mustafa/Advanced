function stringLength(string1,string2,string3){
    let sum = string1.length+string2.length+string3.length;
    let average = Math.floor(sum/3);

    console.log(sum);
    console.log(average);
}
stringLength('chocolate', 'ice cream', 'cake');