function towerBuilder(nFloors) {
    
    var towers = []; //represent the tower
    var tower = ""; //hold the asterisk without space
    var count = nFloors; //the number of time to iterate
    var index = 1; //Represent the amount of asterisk a floor will have
    var backSpace = ""; //represent the space in the back part of the floor
    var frontSpace = ""; //represent the space in the front part of the floor
    var briksCount = (nFloors != 1 ? nFloors + 2 : 1 ); //The amount of brick, the first floor has
    var numberOfSpace = 0; // the number of space in each side of a floor
    
    while(count != 0)
    {
        for(var i =0; i < index; i ++  )
        {
            tower += "*";
        }
        
        numberOfSpace = Math.floor((briksCount - index) / 2);
        for(var i = 0; i < numberOfSpace; i++)
        {
          backSpace += " ";
          frontSpace += " ";
        }
        
        tower =  frontSpace + tower + backSpace;
        
        towers.push(tower);
        tower = "";
        index += 2;
        frontSpace = "";
        backSpace = "";
        
        count -= 1;
    }
    
    return towers;
}