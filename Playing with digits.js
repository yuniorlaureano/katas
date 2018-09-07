function digPow(n, p){
  // ...
  var sum = 0;
  var splitedNum = n.toString().split('');
  var e = p;
  var k = -1;
  
  for(var i = 0; i < splitedNum.length; i++){
    
    sum += Math.pow(Number(splitedNum[i]), e);
    e += 1;
  }
  
  k = sum / n;
  
  return (Math.floor(k) === 0)? -1 : k;
  
}