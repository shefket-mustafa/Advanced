function townsToJSON(array){
    let obj=[];
   
    for (i=1;i<array.length;i++) {
        let newArr=array[i].split("|");
        let town=newArr[1].trim();
        let latitude=Number(newArr[2]);
        latitude=latitude.toFixed(2);
        let longitude=Number(newArr[3]);
        longitude=longitude.toFixed(2);
        obj.push({Town:town,Latitude:Number(latitude),Longitude:Number(longitude)});
        

}


        console.log(JSON.stringify(obj));




}
townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);