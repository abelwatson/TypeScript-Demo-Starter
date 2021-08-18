//Key Rule: Notice that with methods in our class that you don't have to use the function keyword.
//1 we create a new class called Person. (Part of ES6)
var Person = /** @class */ (function () {
    function Person() {
    }
    //3 Here we have a method. This is a function that prints "Hello, " then a name to the console
    Person.prototype.sayHello = function () {
        console.log("Hello", this.firstName);
    };
    return Person;
}());
//4 We instantiate(create an instance) of the class by setting the type to Person and calling the new keyword to create a new instance of the class. 
var phil = new Person();
//5 Back to the top code. We set the properties on the instance of the joeDude property.
phil.firstName = "Phil";
phil.lastName = "Donahue";
phil.sayHello(); //6 We call the method on the phil object. Because the firstName of  is set to "Phil", this will print "Hello Phil" to the console.
//Instantiation means to create a new instance of a class. Think of the class as the cookie-cutter, and the object as the cookie. The cookie cutter is used over and over to make new cookies. Each cookie might have different property values, but at the end of the day, they are all cookies.
//Pattern:
//1         //2    //3    //4
var someVariableName = new Person();
//1 We declare a variable with our own custom name.
//2 We declare the type. It's a custom type of Person.
//3 We use the {new} keyword to instantiate a new instance.
//4 We call the class with parens. The parens invoke the constructor function.
//----------------------------------------------------------------------------------------
//Practice
// Create a method called sayHelloToFullname that says hello to someone by full name.
// Instantiate(create a new instance of) the person class.
// Set the first name property to 'Sheriff' and the last name property to 'Holler'.
// Call the sayHelloToFullname method on the instance of the class.
//----------------------------------------------------------------------------------------
//# sourceMappingURL=03-classes.js.map