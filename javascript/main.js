// note-  anything that we see in javascript is an object
// its an interpredted language
// it execute line  by line

console.log("hello from mainjs");
// console.lg('hii')

// print values in console  :-
console.log("this is a log!");
console.warn("this is a warning!");
console.error("this is a error!");

// data types :-
// 1. primitive data types (PDTs) -
// a. number
variable_one = 10000000; // it can be nagative, float , decimal, double
console.log(variable_one);
console.log(typeof variable_one);

// b. string - ""  , '' , ``(B)
variable_one = "welcome to js";
console.log(variable_one);
console.log(typeof variable_one);

// c. boolean data types -
variable_two = false;
console.log(variable_two);

// d. null
variable_three = null;
console.log(variable_three);
console.log(typeof variable_three); //object - it is a mistake

//e. undefined
variable_four = undefined;
console.log(variable_four);
console.log(typeof variable_four);

// console.log( variable_five) (error)

// *****Conditional statements :- *********

// ES5
demo = 10;
if (demo >= 0) {
    console.log(demo + " is a +ve number");
} else {
    console.log(demo + "is a -ve number");
}

// ES6 Syntax
// condition ? TRUE : FALSE
// Limitiation :- TRUE / FALSE statements one-liner statements
demo2 = -10;
demo2 >= 0 ?
    console.log(`${demo2} is a +ve number`) :
    console.log(`${demo2} is a -ve number`);

//  keywords - let , var , const
// let is a pvt keyword that it only use in its own scope
//  var is public keyword
// const - value can't be change and it need to be defined
flag = true;
if (flag) {
    let a = 100; // pvt
    var b = 200; // public
    const c = 300; //pvt
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(`the value of a inside if-block is ${a}`);
} else {
    b = 200;
}

// console.log(a);  show undfined cause pvt and const c also

// ***********LOOPS************
//1. FOR LOOP -

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

let i = 0;
while (i < 5) {
    console.log(i);
    i += 1;
}

// ******NON-PRIMITIVE DATA TYPES(Non-PDTs)********

// a) ********ARRAYS********
// * it is contigous in nature
//
// identify as -  []   (square brackets)
// 3 ways to define arrays
let numbers = [10, 20, 30, 40, 50];
let arr = []; // empty array
let arrobj = new Array(10);

console.log(numbers);
// console.log(typeof numbers);
console.log(arr);
console.log(arrobj);

console.log(numbers);

// ****Array Methods****
//1. push
numbers.push(60);
console.log(numbers);

// array spread operator
let myArr1 = [100, 200, 300, 400, 500];
// let myArr2 = myArr1    // this is not a copy mechanism

//array spread operator
let myArr2 = [...myArr1];

myArr1.push(-10);
myArr2.push(1000);
console.log(myArr1); //[100, 200, 300, 400, 500, -10]
console.log(myArr2); //[100, 200, 300, 400, 500, 1000]

//2. pop
myArr1.pop(-10);
console.log(myArr1);

// shift - remove  Element from starting of array
let deleteElement = myArr1.shift(100);
console.log(myArr1);

//unshift - add Element from starting of array
letnewlength = myArr1.unshift(50); //5
console.log(myArr1);

let num1 = [10, 20, 30, 40, 50];
let num2 = [100, 200, 300, 400, 500];
let combinedarray = num2.concat(num1);
console.log(combinedarray);

let dummyArray = [10, "String", true, null, undefined, []];
console.log(dummyArray);

// ****matrices****
//****2D ARRAYS*****
let twoDArray = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
];
console.log(twoDArray);
console.log(twoDArray[1][1]);

//******* b)JS OBJECTS- (object datatype)
// defined  by -   { }
// let myObj = {key: value}
// console.log(myobj);

let myobj = {
    name: "user one", //// string object
    email: "userone@service.com",
    password: "examplepassword",
    isemployed: true, // boolean object
    hobbies: ["music", "painting", "readingbooks"], //array object
    address: {
        city: "kharar",
        street: "street-1",
        state: "punjab",
        pincode: [1234, 5678],
    },
};
console.log(myobj);
console.log(
    `hi,this is user ${myobj.name} , my email is ${myobj.email} , & my password is ${myobj.password}`
);
console.log(myobj.hobbies[0]);
console.log(myobj.address.city, "-", myobj.address.state);
console.log("pincode - ", myobj.address.pincode[1]);

// constructor

let myObj = new Object();

(myObj.name = "user one"), 
myObj.email = "userone@service.com";
myObj.password = "examplepassword";
myObj.isemployed = true;
myObj.hobbies = ["music", "painting", "readingbooks"];
myObj.address = {
    city: "kharar",
    street: "street-1",
    state: "punjab",
    pincode: [1234, 5678],
};
console.log(myObj);

// Array  of Objects [ {} , {} , {} ]

const users = [
    
    {
        name: "user one",
        email: "userone@service.com",
        password: "examplepassword",
        isemployed: true, 
        hobbies: ["music", "painting", "readingbooks"], 
        address: {
            city: "kharar",
            street: "street-1",
            state: "punjab",
            pincode: [1234, 5678],
        }
    },    // users[0].password

    {
        name: "user two", 
        email: "userone@service.com",
        password: "examplepassword",
        isemployed: true, 
        hobbies: ["music", "painting", "gym"], 
        address: {
            city: "kharar",
            street: "street-2",
            state: "punjab",
            pincode: [1234, 5678],
        }
    } ,

    {
        name: "user three", 
        email: "userone@service.com",
        password: "examplepassword",
        isemployed: true, 
        hobbies: ["music", "painting", "writing"], 
        address: {
            city: "kharar",
            street: "street-3",
            state: "punjab",
            pincode: [1234, 5678],
        }
    }
];
console.log(users);


//4.*************JSON**************
// JSON(javascript Object Notation)
// JS -> interface -> JSON -> 2 function 

//1. Stringyfy - Array of object to json
// AoO 

const myJSONResponse  = JSON.stringify(users)
console.log(myJSONResponse)

// 2. parse() -> JSON to AoO
const convertAoO = JSON.parse(myJSONResponse)
console.log(convertAoO)