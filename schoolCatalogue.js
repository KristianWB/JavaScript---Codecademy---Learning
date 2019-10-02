//1.0

//1.1
class School {
    //1.2 - Building Constructor
    constructor(name, level, numberOfStudents){
      
      //1.3 - Setting up properties
      this._name=name;
      this._level=level;
      this._numberOfStudents=numberOfStudents;
    }
    
    //1.4 - Getters
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    
    //1.5 - setter for numberOfStudents
    set numberOfStudents(newNumberOfStudents){
      // Checking for input type    
      if(typeof newNumberOfStudents === "number"){
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }    
    } 
  }
  
  let test = new School('abc', 'Primary', 23)
  console.log(test)
  test.numberOfStudents = 50;
  console.log(test.numberOfStudents)