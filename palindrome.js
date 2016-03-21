function palindrome(str) {
  var array = [];
  var correctedString = str.replace(/[^\w]|_/g, "").toLowerCase();
  array = correctedString.split("");
  var string = array.join("");
  var reversedString = array.reverse().join("");
  if (string == reversedString) return true;
  return false;
}

