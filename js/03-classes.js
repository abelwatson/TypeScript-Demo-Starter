//Key Rule: Notice that with methods in our class that you don't have to use the function keyword.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//Constructors
//1 We create a new class called Game.
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name; //4 We set the value of gameName equal to the value that is passed into the constructor's argument.
        this.gameMaker = maker;
    }
    return Game;
}());
//5 We create an instance of the Game class called Battleship.
//6 We pass in values to satisfy the requirements of the constructor. If we do not pass values in for the constructor's arguments, we get an error. The following code throws a compile-time error:
var battleship = new Game('Battleship', 'Hasbro');
// let battleship: Game = new Game();
var GameWithoutConstructor = /** @class */ (function () {
    function GameWithoutConstructor() {
    }
    return GameWithoutConstructor;
}());
//1 Here we instantiate the class with no constructor.
var monopoly = new GameWithoutConstructor();
//2 Then, we have to set each of the properties, one at a time. With a constructor this could be done in one line of code.
monopoly.gameName = 'Monopoly';
monopoly.gameMaker = 'Hasbro';
//Inheritance:
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
//Example One
//1
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false; //2
myCar.topSpeed = 200; //3
myCar.make = "Volvo";
//Example Tw0
//1
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true; //2
myMotorcycle.topSpeed = 180; //3
//1 The extends keyword declares that the class is going to inherit all of the properties and methods from another class. This is called subclassing. Both motorcyle and automobile inherit from vehicle.
//2 Note that these properties in the subclass. The motorcycle class does not have access to the isSelfDriving property and the Automobile class does not have access to EasyToDoWheelie/
//3 These are properties from the parent class, the Vehicle class. They are inherited properties.
//-----------------------------------------------------
//Practice
// Create a class called Animal with 3 properties.
// Create two subclasses, maybe Bear and Tiger, that each has a property unique.
// Instantiate both classes and add values for properties to each.
//-----------------------------------------------------
//Parameter Properties
// class Store {
//     constructor(name: string, city: string){
//         this.name = name;
//         this.city = city;
//     }
//     name: string;
//     city: string;
// }
// let ikea: Store = new Store('Ikea', 'Fishers');
//Streamlined Code
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
//Accessors
//1 We have a class called Employee that extends Person.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //5 We have a method called getSalary that returns a string. Inside the method, we perform so low-level business logic of converting the salary number value to a string in the return statement.
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    //3 We have a method called setSalary that takes in a number. It sets the value of the private property to the value that is passed in as an argument. These are both number types.
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; //This breaks
var salaryResult = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
//# sourceMappingURL=03-classes.js.map