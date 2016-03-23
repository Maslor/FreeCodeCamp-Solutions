function pairDNA(str) {
  array = str.split("");
  for (var i = 0; i < array.length; i++){
    if (array[i] == "A")
      array[i] = ["A", "T"];
    else if (array[i] == "T")
      array[i] = ["T", "A"];
    else if (array[i] == "C")
      array[i] = ["C", "G"];
    else if (array[i] == "G")
      array[i] = ["G", "C"];
  }
  return array;
}