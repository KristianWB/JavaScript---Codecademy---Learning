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
  
  class Book extends Media{
    constructor(author, title, pages){
      super(title)
      this._author = author
      this._pages = pages
    }
  
    // 6.13
    get author(){
      return this._author
    }
    
    get pages(){
      return this._pages
    }
    
  }
  
  let test = new Media('booHoo')
  test.addRating(1)
  test.addRating(2)
  test.addRating(3)
  test.addRating(4)
  test.addRating(5)
  console.log(test.getAverageRating())