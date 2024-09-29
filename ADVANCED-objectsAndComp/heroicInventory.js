function heroic(array){
    let heroes=[];

    for (const heroEntry of array) {
        
        let [name,level,items]=heroEntry.split(" / ");
        level=Number(level);
        
        items=items ? items.split(", ") : [];

        if(name && level){
        heroes.push({name,level,items});
        }
    }
return(JSON.stringify(heroes));
}
heroic(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);