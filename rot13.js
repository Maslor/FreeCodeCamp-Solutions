function rot13(str) { // LBH QVQ VG!
  array = str.split("");
  
  for (var i = 0; i < array.length; i++) {
    if (array[i].charCodeAt() >= 97 && array[i].charCodeAt() <= 109 
        || array[i].charCodeAt() >= 65 && array[i].charCodeAt() <= 77)
      array[i] = String.fromCharCode(array[i].charCodeAt() + 13);
    else if (array[i].charCodeAt() >= 110 && array[i].charCodeAt() <= 122 
        || array[i].charCodeAt() >= 78 && array[i].charCodeAt() <= 90)
      array[i] = String.fromCharCode(array[i].charCodeAt() - 13);
  }
  return array.join("");
}