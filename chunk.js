function chunk(arr, size) {
  // splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
  newArray = [];
  for ( var i = 0; i < arr.length; i += size) {

   newArray.push(arr.slice(i, i + size));
  }
  return newArray;
}