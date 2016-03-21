function destroyer(arr) {
  //Remove all elements from the initial array that are of the same value
  // as the next arguments provided.
  argumentArray = [];
  for (i = 1; i < arguments.length; i++)
    argumentArray.push(arguments[i]);
  return arr.filter(function(val){
   return argumentArray.indexOf(val) == -1;
  });
}