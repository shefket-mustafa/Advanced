function extract(array) {
  let newArr = [];
  let currentBiggest = array.shift();
  newArr.push(currentBiggest);
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= currentBiggest) {
      currentBiggest = array[i];
      newArr.push(currentBiggest);
    }
  }
  return newArr;
}
extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
