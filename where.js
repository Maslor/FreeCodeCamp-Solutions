function where(arr, num) {
//Return the lowest index at which a value (second argument) should be 
//inserted into an array (first argument) once it has been sorted.
  arr = arr.sort(function(a,b){
    return a-b;
  });
  
  for (var i = 1; i < arr.length; i++){
    if(num <= arr[0]) return 0;
    else if (num >= arr[i-1] && num <= arr[i]) return i;
    else if (i === arr.length - 1) {
      if (num >= arr[i-1]) return i+1;
    }
  }
}