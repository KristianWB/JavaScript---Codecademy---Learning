//#6 - import

//#6.1 - importing from airplane.js
import Airplane from './airplane';

//6.2 define function displayFuelCapacity()
function displayFuelCapacity() {
  //#6.3 - forEach iteration method
  //#6.4 - pass element as parameter
  Airplane.availableAirplanes.forEach(function(element){ 
    //6.5 - log the elements stats
    console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`)
  });
}

displayFuelCapacity()