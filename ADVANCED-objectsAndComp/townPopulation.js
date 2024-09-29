function townPopulation(array){
    let obj={};
    for (const input of array) {
        let[town,population]=input.split(" <-> ");
        
        if(!obj.hasOwnProperty(town)){
            obj[town]=0
        }
        obj[town]+=Number(population);
    }
    console.log(Object.entries(obj).map((entries)=>`${entries[0]} : ${entries[1]}`).join('\n'));

}
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);