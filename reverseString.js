function reverseString(str) {
  var array = [];
  array = str.split("").reverse();
  str = array.join("");
  return str;
}
