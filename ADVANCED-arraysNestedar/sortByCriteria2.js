function sortByCrit(array){

    let sorted = array.sort((a,b)=>a.length-b.length || a.localeCompare(b));
    sorted.forEach(element => console.log(element));
}
sortByCrit(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);