//Properties

interface Animal {
    name: string;
    numberOfLegs: number;
}

// let a: Animal = new Animal(); //Breaks

let lassie: Animal = {
    name: 'Lassie',
    numberOfLegs: 4
}


//1 This who line, up until the curly brace is the method/function signature. This includes the function's name, a name parameter and its type, and a return type of string. 
// sayHelloWorld(name: string) : string {
    // 2. The code within the curly braces is the method implementation. This is what is going to happen inside the function when it is called, and it includes the result.
    // var someNum = 1 + 2;
    // var someOtherNum = 1 + 2;
    // return name;
// }

interface Product {
    name: string;
    price: number;
    setTimeOfPurchase(d: Date);
}

                 //1 Notice that we are implementing an interface on the class. Since we are implementing our interface on the class, we are imposing its shape. This means the class will be required to hold the properties and methods of the interface. When we implement it, it will show an error until we add those things.
class Apples implements Product {
    name: 'Apples';
    price: 5.50;
    //2 We implement the setTimeOfPurchase method in the class, and provide a basic implementation by logging the date to the console.
    setTimeOfPurchase(d: Date) {
        console.log("Apples purchased on ", d);
    }
}
//3 We then create a new instance of the Apples class and call the setTimeOfPurchase method.
let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));