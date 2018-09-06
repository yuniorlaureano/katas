function createPhoneNumber(numbers){
  
  var phone = "";
  
  var head = numbers.slice(0,3).join('');
  var body = numbers.slice(3,6).join('');
  var tail = numbers.slice(6,10).join('');
  
  return phone += "("+head+") " + body + "-" + tail ;
}