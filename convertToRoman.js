function convert(num) {
  var roman = {
  0:"",
  1:"I",
  2:"II",
  3:"III",
  4:"IV",
  5:"V",
  6:"VI",
  7:"VII",
  8:"VIII",
  9:"IX",
  10:"X",
  20:"XX",
  30:"XXX",
  40:"XL",
  50:"L",
  60:"LX",
  70:"LXX",
  80:"LXXX",
  90:"XC",
  100:"C",
  200:"CC",
  300:"CCC",
  400:"CCCC",
  500:"D",
  600:"DC",
  700:"DCC",
  800:"DCCC",
  900:"CM",
  1000:"M",
  2000:"MM",
  3000:"MMM"
  };
  
  var numeralArray = [];
  var count = 1;
  
  while (num > 0) {
    if(count == 1){
      numeralArray.push(roman[num%10]);
    }
    else if (count == 2){
      numeralArray.push(roman[num%10*10]);
    }
    else if (count == 3){
      numeralArray.push(roman[num%10*100]);
    }
    else if (count == 4){
      numeralArray.push(roman[num%10*1000]);
    }
    
    num = Math.floor(num/10);
    count++;
    }
  
  return numeralArray.reverse().join("");
}


