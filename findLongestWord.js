function findLongestWord(str) {
  wordArray = str.split(" ");
  var longestWord = "";
  for (var i = 0; i < wordArray.length; i++){
    if (wordArray[i].length > longestWord.length)
      longestWord = wordArray[i];
  }
  
  return longestWord.length;
}