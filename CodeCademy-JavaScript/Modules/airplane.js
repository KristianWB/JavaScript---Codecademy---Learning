/* - from former exercises
//#5 - export default

//#5.1 - create module
let Airplane = {
    //#5.2 - creating variables
        availableAirplanes: [
        //#5.3 - Creating airplane objects
        {
          name: 'AeroJet',
         fuelCapacity: 800
        },
        {
          name: 'SkyJet',
          fuelCapacity: 500
        }
      ],
    };
    
    
    
    export default Airplane;
    */

    /* --- replaced with new code ---
//#7 - Named Exports
//#7.1 - removing statements
//#7.2 - changing code
let availableAirplanes = [
    {
      name: 'AeroJet',
      fuelCapacity: 800,
      availableStaff: [
      'pilots',
      'flightAttendants',
      'engineers',
      'medicalAssistance',
      'sensorOperators',
      ]
      
    },
    {
        name: 'SkyJet',
      fuelCapacity: 500,
      availableStaff: [
        'pilots',
        'flightAttendants'
      ]
    }
  ]
  
  let flightRequirements = 
      {
        requiredStaff: 4  
        
        };
  
  function meetsStaffRequirements(availableStaff, requiredStaff){
    if(availableStaff.length>=requiredStaff)
      return true
    else
      return false
  }
  
  //#7.8
  export { availableAirplanes, flightRequirements, meetsStaffRequirements };
  */

  //#9.1 - adding properties
export let availableAirplanes = [{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 		'medicalAssistance', 'sensorOperators'],
   maxSpeed: 1200,
   minSpeed: 300
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200
 }];
 
 //#9.2 - added requiredSpeedRange property
 export let flightRequirements = {
   requiredStaff: 4,
   requiredSpeedRange: 700
 };
 
 export function meetsStaffRequirements(availableStaff, requiredStaff) {
   if (availableStaff.length >= requiredStaff) {
     return true;
   } else {
     return false;
   }
 };
 
 //#9.3 - adding function meetsSpeedRangeRequirements()
 export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange){
   //#9.4 - declaring and assigning
   let range = maxSpeed - minSpeed;
   
   //#9.5 - is range larger than the required speed range ?
   if(range>requiredSpeedRange)
     return true
   else
     return false
 };