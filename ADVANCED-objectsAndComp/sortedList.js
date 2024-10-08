function createSortedList() {
  let collection = [];

  return {
    add(element) {
      collection.push(element);
      collection.sort((a, b) => a - b);
    },
    remove(index) {
      if (index >= 0 && index < collection.length) {
        collection.splice(index, 1);
      } 
      collection.sort((a, b) => a - b);
    },
    get(index) {
        if (index >= 0 && index < collection.length) {
      return collection[index];
        }
    },
    get size() {
      return collection.length;
    },
  };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
