      //1      //2        //3
let username: string = "instructor";
let password: string = "Letmein1234!";
let instructorId: number = 5;
//1 declared a variable
//2 declared the variable type
//3 initialized the variable with a value of that type

//declare value without initialization
let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

//implicit typing, where we don't have to declare a type(auto declares)
let greeting = "Hello";

//numbers are common primitive types and declared by number in TypeScript
let age: number = 40;
let currentYear: number = 2021;

//also supports ES6 octal literals
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

//Strings: most common primitive type
let companyName: string;
companyName = "Eleven Fifty";

//Single Quotes or Double Quotes are fine(just be consistent)
let appName: string = 'Twitter';
appName = "Instagram";

//Boolean is the same syntax
let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

//Array: expressed in 2 ways
//1 - more prevalent
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya'];
//2
let allScores: Array<number> = [100, 92, 95, 96];
//accessing arrays:
console.log("Student List:", studentList[0])

//Any: toggling off forced types(not knowing what the variable is)
let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

//Void has no type at all, more common in functions with no returns
function sayHelloToAll() : void {
    console.log("Hello to all!");
}

let undefinedVariable: undefined = undefined;
let nullVariable: null = null;


//Tuple: allows us to create an array with multiple types
//declare a tuple type
let usernameAndId: [number, string];
//Initialize it
usernameAndId: [1, "kennisreally40"];
//Making sure to write in the correct order

//Enum: give names to numeric values
enum WeaponType { Sword, Saber, Spear };
let weapon: WeaponType = WeaponType.Sword;
//Similar to arrays, enums start at 0, but it can be assigned to a different number
enum CardType { Ace = 1, Two, Three, Four };
let cardType: string = CardType[2]
console.log(cardType)

//Union Types:
//creates more flexibility in variables, still keeping the intend on declaring a specific type for our variables.

let x: number | string;
let y: number | null;
//it can now take on more than one type
x = '1234';
x = 1324;
// x = true;
// y = false;