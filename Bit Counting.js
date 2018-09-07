var countBits = function(n) {
  
  if(n === 0)
    return n;
  else
    return recBit(Math.floor(n / 2), n % 2);
};

var recBit = function(n, bit) {
  
  console.log(bit);
  
  if(n === 0 ){
    
    return 1;
  }
  
  return bit + recBit(Math.floor(n / 2), n % 2);
};