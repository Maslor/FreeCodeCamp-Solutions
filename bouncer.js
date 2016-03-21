function bouncer(arr) {
	//Remove all falsy values from an array.
	//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
  return arr.filter(function(val){
    return val;
  });
}


