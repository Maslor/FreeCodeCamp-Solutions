function dropElements(arr, func) {
  // Drop them elements.
  arrLength = arr.length;
  for (var i = 0; i < arrLength; i++){
    if (!func(arr[0])) 
      arr.shift();
  }
  return arr;
}