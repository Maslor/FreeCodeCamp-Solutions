function convertSymbolsToHTML(str) {
  // &colon;&rpar;
  var array = str.split("");
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "&")
      array[i] = "&amp;";
    else if (array[i] === "<")
      array[i] = "&lt;";
    else if (array[i] === ">")
      array[i] = "&gt;";
    else if (array[i] === "\"")
      array[i] = "&quot;";
    else if (array[i] === "'")
      array[i] = "&apos;";
  }
  return array.join("");
}