/*
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

//#6.6 - calling the function
displayFuelCapacity();
*/

// #8 - Named Imports
import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();