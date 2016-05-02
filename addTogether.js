function addTogether() {
  if (arguments.length > 1) {
     if(typeof arguments[0]==='number' && typeof arguments[1]==='number') 
       return arguments[0] + arguments[1];
  }
  else {
    var arg = arguments[0];
    if (typeof arg=== 'number') {
      return function(arg2) {
        if (typeof arg2 === 'number')
          return arg + arg2;
      }
    }
  }  
}