function largestNumbersOfSubArrays(arr) {
  var finalArray = [];
  var largestInt = 0;
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr[i].length; j++){
      if (arr[i][j] > largestInt)
        largestInt = arr[i][j];
    }
    finalArray.push(largestInt);
    largestInt = 0;
  }
  return finalArray;
}


