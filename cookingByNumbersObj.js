function cookingObj(stringAsNum,operat1,operat2,operat3,operat4,operat5){
    let number = Number(stringAsNum);
    let array=[operat1,operat2,operat3,operat4,operat5];

    let cookingObject={
        "chop": (a) => a/2,
        "dice": (a) => Math.sqrt(a),
        "spice": (a)=>a++,
        "bake": (a)=>a*3,
        "fillet": (a)=>a*0.80
    }

    array.forEach(element => {
            number=cookingObject[element](number)
            console.log(number);
    });
}
cookingObj('32', 'chop', 'chop', 'chop', 'chop', 'chop');