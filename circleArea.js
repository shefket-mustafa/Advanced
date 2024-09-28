function circleArea(something){
    
    if(typeof(something)==="number"){
        let result = (Math.PI)*Math.pow(something,2);
        console.log(`${result.toFixed(2)}`);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(something)}.`);
    }
}
circleArea(5);
circleArea('name');