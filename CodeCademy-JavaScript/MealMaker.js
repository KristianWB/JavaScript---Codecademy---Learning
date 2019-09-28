const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  
	get appetizers() {},  
	set appetizers(appetizerIn) {},
  
  get mains() {},
  set mains(mainsIn) {},
  
  get desserts() {},
  set desserts(dessertsIn) {},
  
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    } ;
  },
  
  addDishToCourse(courseName, dishName, dishPrice) {
   const dish = {
     dishName: dishName,
     dishPrice: dishPrice
   } 
   this._courses[courseName].push(dish);

  },
  
  getRandomDishFromCourse(courseName) {
    let dishes = this.courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
    return dishes[randomIndex];
  },
  
  generateRandomMeal(){
  	let appetizer = getRandomDishFromCourse(appetizers);
    let main = getRandomDishFromCourse(mains);
    let dessert = getRandomDishFromCourse(desserts);
    
    //Calculating total price
    let totalPrice = appetizer[1]+main[1]+desserts[1];
    const meal = [appetizer, main, dessert, totalPrice];
  }
};