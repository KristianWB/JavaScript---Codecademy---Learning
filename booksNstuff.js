class Media{
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    
    set isCheckedOut(boolean){
          this._isCheckedOut = boolean;
    }
    
    toggleCheckOutStatus() {
      if(this._isCheckedOut === false){
        this._isCheckedOut = true;
      } else {
            this._isCheckedOut = false;
      }
    }
    
      //6.7
    
    getAverageRating(){
      let sumOfRating = this.ratings.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0);
      let averageRating = sumOfRating/this.ratings.length
      return averageRating
    }
    
    //6.8 - 6.12
    addRating(number){
      this._ratings.push(number)
    }
    
  }
  
  // Setting up the Book Class
  class Book extends Media{
    constructor(author, title, pages){
      super(title)
      this._author = author
      this._pages = pages
    }
  
    // 6.13
    get author(){
      return this._author;
    }
    
    get pages(){
      return this._pages;
    }
    
  }
  
  // Setting up the Movie class
  //6.14
  class Movie extends Media{
    constructor(title, director, runTime){
      super(title);
      this._director=director;
      this._runTime=runTime;
    }
    
    get director(){
      return this._director;
    }
    
    get runtime(){
      return this._runTime;
    }
  }
  
  //6.15
  let historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
  
  console.log('8.15')
  console.log(historyOfEverything)
  
  //8.16 + 8.17
  historyOfEverything.toggleCheckOutStatus()
  console.log('8.16')
    console.log(historyOfEverything)
  
  //8.18
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  
  
  
  
  