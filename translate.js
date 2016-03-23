function translate(str) {
  array = str.split("");
  var firstLetter;
  var secondLetter;
  
  if (isVowel(array[0])) {
    array.push("way");
    return array.join("");
  }
  else if(!isVowel(array[0]) && isVowel(array[1])){
    firstLetter = array[0];
    array.shift();
    array.push(firstLetter + "ay");
    return array.join("");
  }
  else if(!isVowel(array[0]) && !isVowel(array[1])){
    firstLetter = array[0];
    secondLetter = array[1];
    array.shift();
    array.shift();
    array.push(firstLetter + secondLetter + "ay");
    return array.join("");
  }
}

function isVowel(x) {

    var result;

    result = x == "a" || x == "e" || x == "i" || x == "o" || x == "u";
    return result;
}