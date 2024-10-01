function rotate(array,rotation){

    for (let i = 0; i < rotation; i++) {
        let popped=array.pop();
        array.unshift(popped);
    }
    console.log(array.join(" "));
}
rotate(['1', 
'2', 
'3', 
'4'], 
2);