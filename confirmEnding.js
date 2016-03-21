function confirmEnding(str, target) {
  //checks if string ends with target
  array = str.split(target);
  if (array[array.length-1] === "") return true;
  return false;
}