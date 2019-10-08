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
  