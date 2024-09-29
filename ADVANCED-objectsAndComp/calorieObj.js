function calorieObj(array) {
  let object = {};

  for (let i = 0; i < array.length; i += 2) {
    let nameOfProduct = array[i];
    let quantityOfProduct = array[i + 1];

    object[nameOfProduct] = Number(quantityOfProduct);
  }

  console.log(object);
}
calorieObj(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
