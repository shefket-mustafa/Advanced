function pieceOfPie(array,string1,string2){
    let newArray=[];

    for (let i = 0; i < array.length; i++) {
        if(array[i] === string1){
            
            while(array[i]!==string2){
                newArray.push(array[i]);
                i++;
            }
            newArray.push(array[i]);
            break;
        }
    }
    return newArray;
}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');