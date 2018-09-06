function towerBuilder(nFloors) {
    
    var floors = []; 
    var tower = ""; 
    var count = nFloors; 
    var backSpace = "";
    var frontSpace = "";
    var lastFloor = 0;
    var nAstericks = 0;
    var nSpaces = 0;
    var astericks = "";
    
    
    lastFloor = nFloors + (nFloors -1);
    nAstericks = 1;
  
    for(var i = 1; i <= count; i++){
      
      nAstericks = (i == 1? 1 : nAstericks + 2);
      nSpaces = lastFloor - nAstericks;
      
      for(var j = 0; j < (nSpaces / 2); j++){
        
        backSpace += " ";
        frontSpace += " ";
      }
      
      for(var j = 0; j < nAstericks; j++){
        
        astericks += "*";
      }
      
      floors.push(backSpace + astericks +frontSpace);
      
      astericks = "";
      backSpace = "";
      frontSpace = "";
      tower = "";
    }
    
    
    return floors;
}