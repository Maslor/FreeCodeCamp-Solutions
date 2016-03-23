function findMissingLetter(str) {
  var result = undefined;
  for (var i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) != str.charCodeAt(i-1) + 1) 
      result = String.fromCharCode(str.charCodeAt(i-1) + 1);
  }
  return result;
}