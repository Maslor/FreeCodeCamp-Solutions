function factorialize(num) {
  var factorialized = 1;
  for(var i = num; i>1; i--){
    factorialized *= i;
  }
  return factorialized;
}


