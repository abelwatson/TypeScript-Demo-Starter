//JavaScript Function Truth:
//1: we can all the function with a number as the argument
//2: we can all the function with a string as an argument
//3: we can add arguments that weren't originally declared
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//1 - Works
addNumbers(1, 2);
//2 - Errors
// addNumbers(1, 2, 3)
// addNumbers(1, 2, 3, "Foo");
// --------------------------------------------------
//Practice
function fullName(fName, lName) {
    return fName + lName;
}
console.log(fullName("abel", "watson"));
//----------------------------------------------------
//1           //2
function sayHello(name) {
    return name;
}
sayHello("Kenn"); //3
// sayHello(1); //4
//1: create a type for our parameter, a string
//2: use the colon followed by a type to denote a return type
//3: call the function and pass in a string argument(works)
//4: call the function and pass in the wrong return type(breaks)
//--------------------------------------------------------
// function practiceFunc(username: boolean, password: boolean) : boolean {
//     if (username == elevenfiftyuser & password == Letmein1234!)
//         return
// }
// Follow these steps to create a TypeScript function:
// Create a function with a return type of boolean.
// The function takes in a string username and string password for it's password.
// Inside the function have a conditional that checks if the username is set to elevenfiftyuser and the password is Letmein1234!.
// If both conditions are true, the function should return true.
// If one or both conditions are false the function should return false.
//--------------------------------------------------------------------------------------------------------
//Optionals: allow for flexibility in our parameters. letting the argument to me left out if needed.
//Key Rule: Optional params must go after all required params
//1                                               //2
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
//5
addNumbersWithOptional(1, 2); //3
addNumbersWithOptional(1, 2, "This is optional"); //4
//1: numOne and numTwo are not optional
//2: someString is optional
//3: someString is optional, it does require an argument when the function is called
//4: we can also call the function with an argument provided for someString
//5: hovering over the function, someString shows as string | undefined. if a value is passed, it should be a string, if no value, it's undefined.
//Practice:
// Write a function that has three parameters: first, middle, last.
// The middle param should be optional and the first and last should be required strings.
// If a value is passed in for middle, concatenate the fullname and include the middle name.
// If a value is not passed in for middle, concatenate the fullname with just first and last.
//# sourceMappingURL=02-functions.js.map