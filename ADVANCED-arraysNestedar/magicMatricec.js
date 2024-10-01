function magicMatrix(array){
    let sumRows=0;   
    let arr=[];
    let isEqual=true;

    let sum = array[0].reduce((a,b)=> a+b);

    for (let row = 0; row< array.length; row++) {
        let currentRowSum=0;
        for (let col = 0; col < array[row].length; col++) {
            currentRowSum+=array[row][col];
        }
        if(currentRowSum!==sum){
            isEqual=false;
            console.log(isEqual);
            return;
    }
}
console.log(isEqual);  
}
magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])