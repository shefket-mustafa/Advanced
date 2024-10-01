function processOdd(array){
    
    //filtriram masiva i izkarvam chislata na odd pozicii
    let filtered=array.filter((x,i)=>i%2!==0);

    //mapvam masiva s filtriranite chisla kato gi umnojavam po 2
    let mapped=filtered.map(x=>x*2);

    //reversvam
    let reversed=mapped.reverse();
    console.log(reversed.join(" "));
}
processOdd([3, 0, 10, 4, 7, 3]);