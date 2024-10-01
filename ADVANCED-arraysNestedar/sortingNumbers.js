function sortingNums(array){
    let sorted = array.sort((a,b)=>a-b);
    let newArray=[];

    
        while(array.length!==0){
            newArray.push(array.shift());
            newArray.push(array.pop());
        }

        return newArray;

}
sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);