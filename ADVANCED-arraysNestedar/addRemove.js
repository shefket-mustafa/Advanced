function addRemove(array){
    let myArr=[];
    let initialNum=1;
   

    for (const command of array) {
        if(command==='add'){
            myArr.push(initialNum)
        }  else {
            myArr.pop()
        }
        initialNum++;
    }
        if(myArr.length===0){
            console.log('Empty');
            return;
        }
    
    console.log(myArr.join("\n"));
}

addRemove(['add', 
'add', 
'remove', 
'add', 
'add']);