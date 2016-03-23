function sumFibs(num) {
  var fibArray = [1,1];
  var nextNum;
  var oddSum = 0;
  var i = 2;
  while (Math.max.apply(null, fibArray) <= num) {
    nextNum = fibArray[i-2] + fibArray[i-1];
    fibArray.push(nextNum);
    i++;
  }
  for (var j = 0; j < fibArray.length; j++) {
    if (fibArray[j] % 2 !== 0 && fibArray[j]<=num)
      oddSum += fibArray[j];
  }
  return oddSum;
}