//8.0

//8.1
class School {
    //8.2 - Building Constructor
    constructor(name, level, numberOfStudents){
      
      //8.3 - Setting up properties
      this._name=name;
      this._level=level;
      this._numberOfStudents=numberOfStudents;
    }
    
    //8.4 - Getters
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    
    //8.5 - setter for numberOfStudents
    set numberOfStudents(newNumberOfStudents){
      // Checking for input type    
      if(typeof newNumberOfStudents === "number"){
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
    
    //8.6 - Setting up quickfacts method
    quickFacts(){
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
    
    //8.7
    static pickSubstituteTeacher(substituteTeachers){
      let randomNumber = Math.floor(Math.random() * substituteTeachers.length);
      console.log(randomNumber);
      return substituteTeachers[randomNumber];
    }  
  }
  
  //8.8 - Primary school build
  class PrimarySchool extends School {
    
    //8.9 - constructor build
    constructor(name, numberOfStudents, pickupPolicy){
      
      //8.10 - calling supers
      super(name);
      level = 'primary';
      super(numberOfStudents);
      this._pickupPolicy=pickupPolicy;
    }
  }
  
  let test = new PrimarySchool
  
  