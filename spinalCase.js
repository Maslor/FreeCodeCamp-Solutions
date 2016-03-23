function spinalCase(str) {
  // Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
  if (str.search(/[_\s]/) !== -1)
    return str.toLowerCase().replace(/[_\s]/g, "-");
  else
    return str.replace(/(?=[A-Z])/g , '-').toLowerCase();
}