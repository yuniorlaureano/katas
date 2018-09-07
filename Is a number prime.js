function isPrime(num) {
  
  var nIsPrime = true;
  
  if(num < 0)
    return false;
  
  switch(num){
    case 0: return false
      break;
    case 1: return false
      break;
    case 2: return true
      break;
    case 3: return true
      break;
    case 5: return true
      break;
  }
  
  
  for(var i = 2; i <= 5; i++ ){
    
    if(i == 4)
      continue;
    
    if(((Math.floor(num/i)) * i) == num){
      
      nIsPrime = false;
      
      return nIsPrime;
    }
    
  }
  
  return nIsPrime;
}