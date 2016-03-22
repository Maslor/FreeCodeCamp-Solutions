function sumAll(arr) {
  lowestNum = Math.min.apply(null,arr);

  highestNum = Math.max.apply(null,arr);
  
  newArray = [];
  newArray.push(lowestNum);
  
  for (var i = lowestNum + 1; i <= highestNum; i++)
    newArray.push(i);
  
  return newArray.reduce(function(a,b){
    return a+b;
  });
}



