function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function defaultCompare() {
  if (a === b) {
    return 0;
  }

  return a < b ? -1 : 1;
}

function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (compareFn(array[j], array[j + 1] === 1)) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}
