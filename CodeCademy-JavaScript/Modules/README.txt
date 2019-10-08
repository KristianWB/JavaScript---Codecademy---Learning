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