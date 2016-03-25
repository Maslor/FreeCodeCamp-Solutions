function binaryAgent(str) {
  var separatedString = str.split(" ");
  var letterArray = [];
  for (var i = 0; i < separatedString.length; i++) {
    letterArray.push(String.fromCharCode(parseInt(separatedString[i],2)));
  }
  return letterArray.join("");
}