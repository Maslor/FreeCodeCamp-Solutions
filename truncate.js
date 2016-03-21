function truncate(str, num) {
  // truncate string to given number of characters (including '...' at the end)
  if (num < 3)
    return str.slice(0, num) + "...";
  else if (num >= str.length)
    return str;
  return str.slice(0, num - 3) + "...";
}