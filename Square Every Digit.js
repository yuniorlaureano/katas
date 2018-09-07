function squareDigits(num){
  
  var splitedNum = num.toString().split('');
  var strNum = "";
  
  for(var i = 0; i < splitedNum.length; i++){
    
    strNum += Math.pow(Number(splitedNum[i]),2);
  }
  
  return Number(strNum);
}