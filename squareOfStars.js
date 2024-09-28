function squareOfStars(number){
    let string="";

    for (let i = 0; i < number; i++) {
        
        for (let i = 0; i < number; i++) {
            string+='* ';
        }
        console.log(string);
        string="";
    }
}
squareOfStars(1);