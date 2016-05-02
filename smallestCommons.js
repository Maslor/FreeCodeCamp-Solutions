function smallestCommons(arr) {

  arr.sort(function(a,b){
    return a-b;
  });
  
  var lastElement = arr.pop();
  
  for (var j = arr[0] + 1; j < lastElement; j+=1) {
    arr.push(j);
  }
  arr.push(lastElement);
  
 
  var n = 1;
  for (var i = 0; i < arr.length; i+=1) {
    if (n % arr[i] !== 0) {
      n++;
      i=0;
    }
  }
  return n;
}