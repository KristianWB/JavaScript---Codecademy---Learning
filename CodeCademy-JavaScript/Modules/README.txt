Intermediate JavaScript Modules
module.exports

We can get started with modules by defining a module in one file and making the module available for use in another file with Node.js module.exports syntax. Every JavaScript file run in Node has a local module object with an exports property used to define what should be exported from the file.

Below is an example of how to define a module and how to export it using the statement module.exports.

In menu.js we write:

let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu; 

Let’s consider what this code means.

    let Menu = {}; creates the object that represents the module Menu. The statement contains an uppercase variable named Menu which is set equal to an empty object.
    Menu.specialty is defined as a property of the Menu module. We add data to the Menu object by setting properties on that object and giving the properties a value.
    "Roasted Beet Burger with Mint Sauce"; is the value stored in the Menu.specialty property.
    module.exports = Menu; exports the Menu object as a module. module is a variable that represents the module, and exports exposes the module as an object.

The pattern we use to export modules is thus:

    Create an object to represent the module.
    Add properties or methods to the module object.
    Export the module with module.exports.

Let’s create our first module.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------
Intermediate JavaScript modules#
#3

Intermediate JavaScript Modules
require()

To make use of the exported module and the behavior we define within it, we import the module into another file. In Node.js, use the require() function to import modules.

For instance, say we want the module to control the menu’s data and behavior, and we want a separate file to handle placing an order. We would create a separate file order.js and import the Menu module from menu.js to order.js using require(). require() takes a file path argument pointing to the original module file.

In order.js we would write:

const Menu = require('./menu.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}

placeOrder();

We now have the entire behavior of Menu available in order.js. Here, we notice:

    In order.js we import the module by creating a const variable called Menu and setting it equal to the value of the require() function.
     We can set the name of this variable to anything we like, such as menuItems.
    require() is a JavaScript function that loads a module. It’s argument is the file path of the module: ./menu.js. With require(),
     the .js extension is optional and will be assumed if it is not included.
    The placeOrder() function then uses the Menu module. By calling Menu.specialty, we access the property specialty defined in the Menu module.

Taking a closer look, the pattern to import a module is:

    Import the module with require() and assign it to a local variable.
    Use the module and its properties within a program.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#4 - module.exports II

We can also wrap any collection of data and functions in an object, and export the object using module.exports. In menu.js, we could write:

module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  } 
}; 

In the above code, notice:

    module.exports exposes the current module as an object.
    specialty and getSpecialty are properties on the object.

Then in order.js, we write:

const Menu = require('./menu.js');

console.log(Menu.getSpecialty());

Here we can still access the behavior in the Menu module.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
#5 - export default

Node.js supports require()/module.exports, but as of ES6, JavaScript supports a new more readable and flexible syntax for exporting modules. These are usually broken down into one of two techniques, default export and named exports.

We’ll begin with the first syntax, default export. The default export syntax works similarly to the module.exports syntax, allowing us to export one module per file.

Let’s look at an example in menu.js.

let Menu = {};

export default Menu;

    export default uses the JavaScript export statement to export JavaScript objects, functions, and primitive data types.
    Menu refers to the name of the Menu object, the object that we are setting the properties on within our modules.

When using ES6 syntax, we use export default in place of module.exports. Node.js doesn’t support export default by default,
 so module.exports is usually used for Node.js development and ES6 syntax is used for front-end development. As with most ES6 features,
  it is common to transpile code since ES6 is not supported by all browsers.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------
#6 - Import

ES6 module syntax also introduces the import keyword for importing objects. In our order.js example, we import an object like this:

import Menu from './menu';

    The import keyword begins the statement.
    The keyword Menu here specifies the name of the variable to store the default export in.
    from specifies where to load the module from.
    './menu' is the name of the module to load. When dealing with local files, it specifically refers to the name of the file without the extension of the file.

We can then continue using the Menu module in the order.js file.

---------------------------------------------------------------------------------------------------------------------------------------------------
#7 - Named exports

Intermediate JavaScript Modules
Named Exports

ES6 introduced a second common approach to export modules. In addition to export default, named exports allow us to export data through the use of variables.

Let’s see how this works. In menu.js we would be sure to give each piece of data a distinct variable name:

let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 

export { specialty, isVegetarian };

    Notice that, when we use named exports, we are not setting the properties on an object. Each export is stored in its own variable.
    specialty is a string object, while isVegetarian and isLowSodium are objects in the form of functions. Recall that in JavaScript, every function is in fact a function object.
    export { specialty, isVegetarian }; exports objects by their variable names. Notice the keyword export is the prefix.
    specialty and isVegetarian are exported, while isLowSodium is not exported, since it is not specified in the export syntax.

Instructions
1.

Remove the statement that sets Airplane to an empty object, and remove the entire export default line.

You will see an error in the console, but we’ll fix this in the next step.
2.

Modify the availableAirplanes array such that it is a variable defined with let and no longer a property on the Airplane object.
3.

Let’s add some more data to the availableAirplanes array.

In the first object, AeroJet, add a property availableStaff, and set it equal to an array with the elements 'pilots', 'flightAttendants', 'engineers', 'medicalAssistance', and 'sensorOperators'.

In the second object, SkyJet, add a property availableStaff, and set it equal to an array with the elements 'pilots' and 'flightAttendants'.
4.

Define a new variable with let named flightRequirements, and set it equal to an empty object.
5.

Within the flightRequirements object, add a property requiredStaff, and set this equal to 4.
6.

Define a function with the name meetsStaffRequirements() that takes availableStaff and requiredStaff as parameters.
7.

In the body of the meetsStaffRequirements() function, write logic to check if the length of the availableStaff array is greater than or equal to requiredStaff.

The function should contain this logic:

if length of availableStaff is greater than or equal to requiredStaff
  return true
else 
  return false 

8.

Using the export keyword, export the variables availableAirplanes, flightRequirements and meetsStaffRequirements.

---------------------------------------------------------------------------------------------------------------------------------------------------
#8 -Export Named Exports

Named exports are also distinct in that they can be exported as soon as they are declared, by placing the keyword export in front of variable declarations.

In menu.js

export let specialty = '';
export function isVegetarian() {
}; 
function isLowSodium() {
}; 

    The export keyword allows us to export objects upon declaration, as shown in export let specialty and export function isVegetarian() {}.
    We no longer need an export statement at the bottom of our file, since this behavior is handled above.

-------------------------------------------------------------------------------------------------------------------------------------------------
#10 - Import Named Imports

To import variables that are declared, we simply use the original syntax that describes the variable name. In other words, exporting upon declaration does not have an impact on how we import the variables.

import { specialty, isVegetarian } from 'menu';

----------------------------------------------------------------------------------------------------------------------------------------------
