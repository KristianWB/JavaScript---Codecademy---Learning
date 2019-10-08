//#3.1 - import module
const Airplane = require('./1-airplane.js');

//#3.2 - build function around module
function displayAirplane(){
  console.log(Airplane.myAirplane);
};

//#3.3 - call function
displayAirplane();