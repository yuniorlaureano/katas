function toCamelCase(str){
  
  var isUnderScore = false;
  var arrayOfStr = [];
  var delimiter = '-';
  var finalStr = "";
  var tempStr = "";
  
  isUnderScore = str.indexOf('_') > -1;
  
  if(isUnderScore)
  {
    delimiter = '_';
  }
  
  arrayOfStr = str.split(delimiter);
  finalStr = arrayOfStr[0];
  
  for(var i = 1; i < arrayOfStr.length; i++ )
  {
      tempStr = arrayOfStr[i];
      finalStr += tempStr[0].toUpperCase() + tempStr.substr(1);
    
  }
  
  return finalStr;
}