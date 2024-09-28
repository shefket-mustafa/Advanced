function fruit(string,num1,num2){
    let price = num1/1000;

    //`I need ${money} to buy {weight} kilograms {fruit}.`
    console.log(`I need $${(price*num2).toFixed(2)} to buy ${price.toFixed(2)} kilograms ${string}.`);
}
fruit('apple', 1563, 2.35)