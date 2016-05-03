
function truthCheck(collection, pre) {
  // Is everyone being true?
  var count = 0;
  
  for (var i in collection) {
    if (collection[i].hasOwnProperty(pre) && collection[i][pre]!= "" && collection[i][pre]!= undefined && !Number.isNaN(collection[i][pre])){
      count++;
    }
  }
  
  if (count == collection.length) return true;
  else return false;
}

