//1      //2        //3
var username = "instructor";
var password = "Letmein1234!";
var instructorId = 5;
//1 declared a variable
//2 declared the variable type
//3 initialized the variable with a value of that type
//declare value without initialization
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
//implicit typing, where we don't have to declare a type(auto declares)
var greeting = "Hello";
//numbers are common primitive types and declared by number in TypeScript
var age = 40;
var currentYear = 2021;
//also supports ES6 octal literals
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
//Strings: most common primitive type
var companyName;
companyName = "Eleven Fifty";
//Single Quotes or Double Quotes are fine(just be consistent)
var appName = 'Twitter';
appName = "Instagram";
//Boolean is the same syntax
var isLoggedIn = true;
var isGoldLevelUser = true;
//Array: expressed in 2 ways
//1 - more prevalent
var studentList = ['Tom', 'Tracy', 'Nikaya'];
//2
var allScores = [100, 92, 95, 96];
//accessing arrays:
console.log("Student List:", studentList[0]);
//Any: toggling off forced types(not knowing what the variable is)
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
//Void has no type at all, more common in functions with no returns
function sayHelloToAll() {
    console.log("Hello to all!");
}
var undefinedVariable = undefined;
var nullVariable = null;
//Tuple: allows us to create an array with multiple types
//declare a tuple type
var usernameAndId;
//Initialize it
usernameAndId: [1, "kennisreally40"];
//Making sure to write in the correct order
//Enum: give names to numeric values
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
;
var weapon = WeaponType.Sword;
//Similar to arrays, enums start at 0, but it can be assigned to a different number
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
;
var cardType = CardType[2];
console.log(cardType);
//Union Types:
//creates more flexibility in variables, still keeping the intend on declaring a specific type for our variables.
var x;
var y;
//it can now take on more than one type
x = '1234';
x = 1324;
// x = true;
// y = false;
//# sourceMappingURL=01-types.js.map