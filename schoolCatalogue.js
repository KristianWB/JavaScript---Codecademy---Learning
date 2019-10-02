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
    
  }