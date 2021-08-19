//Properties
// let a: Animal = new Animal(); //Breaks
var lassie = {
    name: 'Lassie',
    numberOfLegs: 4
};
//1 Notice that we are implementing an interface on the class. Since we are implementing our interface on the class, we are imposing its shape. This means the class will be required to hold the properties and methods of the interface. When we implement it, it will show an error until we add those things.
var Apples = /** @class */ (function () {
    function Apples() {
    }
    //2 We implement the setTimeOfPurchase method in the class, and provide a basic implementation by logging the date to the console.
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log("Apples purchased on ", d);
    };
    return Apples;
}());
//3 We then create a new instance of the Apples class and call the setTimeOfPurchase method.
var myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
//# sourceMappingURL=04-interfaces.js.map