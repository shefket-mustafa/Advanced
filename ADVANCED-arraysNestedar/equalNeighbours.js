function equalNeighbours(array) {
  let equality = 0;

  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[row].length; col++) {
        if(row+1<array.length && array[row][col]===array[row+1][col]){
            equality++;
        }
        if(col+1<array[row].length && array[row][col]===array[row][col+1]){
            equality++;
        }
    }
  }

  console.log(equality);
}

equalNeighbours([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
