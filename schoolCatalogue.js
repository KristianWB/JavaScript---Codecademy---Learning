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
      super(name, 'Primary', numberOfStudents);
      
      //8.11
      this._pickupPolicy=pickupPolicy;
    }
    
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  
  //8.13
  class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeam){
      super(name, 'HighSchool', numberOfStudents);
      this._sportsTeam=sportsTeam;
    };
    
    get sportsTeam(){
      return this._sportsTeam;
    };
  }
  
  //8.14
  let lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  console.log(lorraineHansbury)
  
  lorraineHansbury.quickFacts()
  