function evenPosition(array){
        let arrayY=[];
    for (let i = 0; i < array.length; i++) {
            if(i%2===0){
                arrayY.push(array[i]);
            } 
    }
    console.log(arrayY.join(" "));
}
evenPosition(['20', '30', '40', '50', '60']);