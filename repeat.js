function repeat(str, num) {
  //repeats a given string (str) a given number of times (num)
  var initialString = "";
  
  if (num < 0) return "";
  while (num !== 0) {
    initialString += str;
    num -- ;
  }
  return initialString;
}

