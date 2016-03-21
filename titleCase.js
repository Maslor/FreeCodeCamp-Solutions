function titleCase(str) {
  wordArray = [];
  tempArray = [];
  wordArray = str.toLowerCase().split(" ");
  for (var i = 0; i<wordArray.length; i++){
    wordArray[i] = wordArray[i].split("");
    wordArray[i][0] = wordArray[i][0].toUpperCase();
    wordArray[i] = wordArray[i].join("");
  }
  
  var finalString =  wordArray.join(" ");
  
  
  return finalString;
}

