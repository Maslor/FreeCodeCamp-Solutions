function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flattenedArray = [];
  
  var flatten = function(arg) {
    if (!Array.isArray(arg))
      flattenedArray.push(arg);
    else {
      for (var i in arg) {
        flatten(arg[i]);
      }
    }
  };
  
  arr.forEach(flatten);
  return flattenedArray;
}