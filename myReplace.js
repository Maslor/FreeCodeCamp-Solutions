function myReplace(str, before, after) {
  if (before[0] == before[0].toLowerCase())
    return str.replace(before,after);
  else {
    array = after.split("");
    array[0] = array[0].toUpperCase();
    after = array.join("");
    return str.replace(before, after);
  }
}