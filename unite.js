function unite(arr1, arr2, arr3) {
  array = arguments;
  finalArray = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (finalArray.indexOf(array[i][j]) === -1){
        finalArray.push(array[i][j]);
      }
    }
  }
  return finalArray;
}