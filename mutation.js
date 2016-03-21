function mutation(arr) {
	//Return true if the string in the first element of the array contains
	// all of the letters of the string in the second element of the array.
  var firstCharArray = arr[0].split("");
  var secondCharArray = arr[1].split("");
  
  for (var i = 0; i < firstCharArray.length; i++)
    firstCharArray[i] = firstCharArray[i].toLowerCase();
  
  for (var j = 0; j < secondCharArray.length; j++){
    if (firstCharArray.indexOf(secondCharArray[j].toLowerCase()) == -1) return false;
  }
  return true;
}

