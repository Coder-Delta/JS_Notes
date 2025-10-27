// console.log("hello word!");
//null is a object


//Type conversion

//NaN is not a number ex:const type = typeof(123abc);
//console.log(type);
//"33" => 33
//"33abc" => NaN
//true = 1 | false = 0
//null = 0
// let a = 1;
// let b = Boolean(a);
// console.log(b);
//1 => true| 0 => false
//"" => false  | "Ranjit" => true

// console.log("1" + 2); //"12"
// console.log("1" - 2); //-1
// console.log("1" * "2"); //2
// console.log("1" / "2"); //0.5
// console.log(1 + 2 + "3"); //"33"
// console.log("3" + 2 + 1); //"321"

//== vs ===
//== only checks value
//=== checks value and type

//stack vs heap memory
//primitive data types are stored in stack memory
//non-primitive data types are stored in heap memory

//srting interpolation
// let name = "Ranjit";
// let age = 19;
// // console.log("My name is " + name + " and my age is " + age);
// console.log(`My name is ${name} and my age is ${age}`);
// const strPrim = "foo"; // A literal is a string primitive
// const strPrim2 = String(1); // Coerced into the string primitive "1"
// const strPrim3 = String(true); // Coerced into the string primitive "true"
// const strObj = new String(strPrim); // String with new returns a string wrapper object.

// console.log(typeof strPrim); // "string"
// console.log(typeof strPrim2); // "string"
// console.log(typeof strPrim3); // "string"
// console.log(typeof strObj); // "object"



//math object
//math.random() => gives random number between 0 to 1
//math.floor() => removes decimal part
//math.ceil() => rounds to next integer
//math.round() => rounds to nearest integer




//object
// const person = {
//   name: "Ranjit",
//   age: 19,
//   hobbies: ["coding", "reading", "gaming"]
// };

// console.log(person.name);//accessing property of object using dot notation
// console.log(person.hobbies[0]);//accessing property of object inside array
// console.log(person["hobbies"]);//alternate way to access property square bracket notation
//symbol data type
// const sym1 = Symbol("my symbol");
// const sym2 = Symbol("my symbol");
// console.log(sym1 === sym2);//false because every symbol is unique
//const sym3 = {
//   [sym1]: "value1",
//   [sym2]: "value2"
// };
// console.log(sym3[sym1]);//accessing symbol property
//console.log(sym3[sym2]);
//freeze object
// const obj = {
//   prop1: "value1",
//   prop2: "value2"
// };
// Object.freeze(obj);
// obj.prop1 = "new value";//this will not change the value because object is frozen
// console.log(obj.prop1);//value1

//functions is treat as first class citizens in javascript
// function greet(name) {
//   return `Hello, ${name}!`;
// }
// const message = greet("Ranjit");
// console.log(message);//Hello, Ranjit!

// const JS_User = {
//     name: "Ranjit",
//     age: 19,
//     sym1: Symbol("id"),
//     greet: function() {
//         return `Hello, ${this.name}!`;
//     }
// };

//.this keyword refers to the current object

//`` used for string interpolation

// console.log(JS_User.greet());       //Hello, Ranjit!
// console.log(JS_User.sym1);         //Symbol(id)
// console.log(typeof JS_User.sym1); //object
// console.log(JS_User.name);        //Ranjit
// console.log(JS_User.age);         //19
// console.log(JS_User);              //{ name: 'Ranjit', age: 19, sym1: Symbol(id), greet: [Function: greet] }

//singleton object
// const singleton = new Object({
//   prop1: "value1",
//   prop2: "value2"
// });
// console.log(singleton.prop1); //value1
// console.log(singleton.prop2); //value2

//constructor function is used to create multiple objects with same properties and methods it is used for singleton object
// const Person = new Object();
// Person.name = "Ranjit"; //adding property to object
// Person.age = 19; //adding property to object
// console.log(Person);
// const RegularUser = {
//     name: "Ranjit",
//     full_name: {
//         first_name: "Xiaounili",
//         last_name: "Zhang",
//         user_full_name: {
//             first_name: "Ranjit",
//             last_name: "Zhang",
//             realName: function() {
//                 return `${this.first_name} ${this.last_name}`;
//             }
//         }
//     },
//     age: 19,
//     email: "xiaounili0@gamil.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Friday"],
// }

// console.log(RegularUser.full_name.user_full_name.realName());//Ranjit Zhang

//Mearge two objects
// const obj1 = {
//   prop1: "value1",
//   prop2: "value2"
// };
// const obj2 = {
//   prop3: "value3",
//   prop4: "value4"
// };
// const obj3 = {
//     prop4: "newValue4",
//     prop5: "value5"
// };
// // const mergedObj = { ...obj1, ...obj2, ...obj3 };//spread operator

// const mergedObj = Object.assign({}, obj1, obj2 , obj3);//Object.assign()
// console.log(mergedObj); //{ prop1: 'value1', prop2: 'value2', prop3: 'value3', prop4: 'value4' }

// // using spread operator the last property will overwrite the previous one
// const mergedObjSpread = { ...obj1, ...obj2 , ...obj3 };
// console.log(mergedObjSpread); //{ prop1: 'value1', prop2: 'value2', prop3: 'value3', prop4: 'newValue4', prop5: 'value5' }
//data comes the database as array of objects format
// data = [
//   { name: "Ranjit", age: 19 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 22 }
// ];

//*********************************important***************************************
//iterating through array of objects
// data.forEach(user => {
//     console.log(`Name: ${user.name}, Age: ${user.age}`);
// });
//output:
// Name: Ranjit, Age: 19
// Name: Alice, Age: 25
// Name: Bob, Age: 22
// to access the data simply use ${ObjectName[key]} syntax

// //get names of all users
// const names = data.map(user => user.name);
// console.log(names); //["Ranjit", "Alice", "Bob"]
// //using simple logic
// console.log(data[0].name); //Ranjit
// console.log(data[1].name); //Alice
// console.log(data[2].name); //Bob
//console.log(Object.keys(RegularUser)); //get all keys of object
//console.log(Object.values(RegularUser)); //get all values of object
//console.log(Object.entries(RegularUser)); //get all entries of object as array of arrays
//console.log(RegularUser.hasOwnProperty("name")); //true
//console.log(RegularUser.hasOwnProperty("address")); //false

//destructuring objects
// const { name, age } = RegularUser;
// console.log(name); //Ranjit
// console.log(age); //19
//editing the object using destructuring
// let { name: userName, age: userAge } = RegularUser;
// userName = "Alice";
// userAge = 25;
// console.log(userName); //Alice
// console.log(userAge); //25 


//arrays
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[0]); //1
// console.log(numbers.length); //5
// numbers.push(6); //adds 6 to the end of the array
// console.log(numbers); //[1, 2, 3, 4, 5, 6]

// const fruits = ["apple", "banana", "cherry"];
// fruits.pop(); //removes last element
// console.log(fruits); //["apple", "banana"]

// fruits.shift(); //removes first element
// console.log(fruits); //["banana"]
// fruits.unshift("mango"); //adds element to the beginning
// console.log(fruits); //["mango", "banana"]
//mearge two arrays
// const vegetables = ["carrot", "potato"];
//const fruits = ["apple", "banana"];
// const food = fruits.concat(vegetables);
// console.log(food); //["apple", "banana", "carrot", "potato"]

// Flattening nested arrays
// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// const flattenedArray = nestedArray.flat(2); // Flattening to depth of 2
// console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]
//const infiniteNestedArray = [1, [2, [3, [4, [5]]]]];
// const completelyFlattenedArray = infiniteNestedArray.flat(Infinity); // Flattening completely
// console.log(completelyFlattenedArray); // [1, 2, 3, 4, 5]

//const slicedArray = food.slice(1, 3); //slicing array from index 1 to 3
// console.log(slicedArray); //["banana", "carrot"]

//destructuring arrays
// const colors = ["red", "green", "blue"];
// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor); //red
// console.log(secondColor); //green
// console.log(thirdColor); //blue


//********************************************************************new_tpoic***********************************************
//functions
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3)); //5
//add//refarence type
//add()//execution type
// ... rest operator and also use as spread operator
// function sum(...args) {
//   return args
// }
// console.log(sum(1, 2, 3, 4)); //[1, 2, 3, 4]

// 📘 Returning Function vs Value in JavaScript

// Case 1: Returning a function
function outer() {
  return function() {
    console.log("Hello from inner function!");
  };
}

const myFunc = outer();  // myFunc now holds the returned function
myFunc();                // ✅ Works — prints "Hello from inner function!"


// Case 2: Returning a value
function calculate() {
  return 100 + 50;       // returns a number
}

const result = calculate(); 
console.log(result);     // ✅ Works — prints 150
// result(); ❌ Error — result is not a function


// 🧠 Rule:
// - return a function → call with ()
// - return a value → use directly


//handel anyobject using function
// const userInfo = {
//     name: "Ranjit",
//     age: 19,
//     email: "xiaounili0@gmail.com"
// };

// function displayUserInfo( anyUserInfo ) {
//     return `Name: ${anyUserInfo.name}, Age: ${anyUserInfo.age}, Email: ${anyUserInfo.email}`;
// }

// console.log(displayUserInfo(userInfo)); //Name: Ranjit, Age: 19, Email:
//console.log(displayUserInfo({ name: "Alice", age: 25, email: "alice@google.com"); //Name: Alice, Age: 25, Email:


// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// function displayArrayElements( ...arrays ) {
//     return arrays;
// }
// console.log(displayArrayElements(...arr1, ...arr2)); //[1, 2, 3, 4, 5, 6]
//console.log(displayArrayElements(arr1, arr2)); //[[1, 2, 3], [4, 5, 6]]
//console.log(displayArrayElements([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]
//arrow function
// const multiply = (a, b) => a * b;
// console.log(multiply(2, 3)); //6

//default parameters
// const greet = (name = "Guest") => `Hello, ${name}!`;
// console.log(greet()); //Hello, Guest!
// console.log(greet("Ranjit")); //Hello, Ranjit!
//***********************************************important****************************************************
//implicit return
// const square = num => num * num;
// const qube = num => (num * num * num); //parenthesis for clarity but not necessary return keyword is not used
// console.log(qube(3)); //27
// console.log(square(5)); //25

//explicit return
// const divide = (a, b) => {
//     return a / b;
// };
// console.log(divide(10, 2)); //5


//scope and hoisting
// var is function scoped
// let and const are block scoped
// console.log(x); //undefined due to hoisting
// var x = 5;
// console.log(x); //5
// console.log(y); //ReferenceError: Cannot access 'y' before initialization
// let y = 10;
// console.log(y); //10
//function scope
// function testScope() {
//     var a = 10; //function scoped
//     let b = 20; //block scoped
//     const c = 30; //block scoped
//     console.log(a); //10
//     console.log(b); //20
//     console.log(c); //30
// }
// nested function scope
// function outerFunction() {
//     var outerVar = "I am from outer function";
//     function innerFunction() {
//         var innerVar = "I am from inner function";
//         console.log(outerVar); //I am from outer function
//         console.log(innerVar); //I am from inner function
//     }
//     innerFunction();
//     // console.log(innerVar); //ReferenceError: innerVar is not defined
// }
// outerFunction();
//block scope
// {
//     let blockVar = "I am from block scope";
//     console.log(blockVar); //I am from block scope
// }
// console.log(blockVar); //ReferenceError: blockVar is not defined
//closure
// function outer() {
//     let count = 0;
//     return function inner() {
//         count++;
//         return count;
//     };
// }

// const counter = outer();
// console.log(counter()); //1
// console.log(counter()); //2
// console.log(counter()); //3
//hoisting
// adOne (5); //works because of hoisting
// function adOne(num) {
//     console.log(num + 1);
// }
// adTwo (10); //TypeError: adTwo is not a function
// const adTwo = function(num) {
//     console.log(num + 2);
// };
// execution context
//global execution context
// function first() {
//     console.log("Inside first function");
//     second();
// }
// function second() {
//     console.log("Inside second function");
// }
// first();
//call stack
// function a() {
//     console.log("Function a");
//     b();
// }

// this used for current object context
// const myObject = {
//     name: "Ranjit",
//     greet: function() {
//         console.log(`Hello, ${this.name}!`);
//     }
// };
// myObject.greet(); //Hello, Ranjit!
// myObject.name = "Alice";
// myObject.greet(); //Hello, Alice!
//in node environment this refers to module.exports mean empty object
//in browser this refers to window object


//****************************************************important***************************************************
//immediately invoked function expression (IIFE)
// (function() {
//     console.log("This is an IIFE");
// })();// named function IIFE
//(() => {
//     console.log("This is an IIFE");
// })();// simple IIFE using arrow function
//(())(); //This is an IIFE
//; //to end statement before IIFE to avoid errors
//parameterized IIFE
// (function(name) {
//     console.log(`Hello, ${name}!`);
// })("Ranjit");//Hello, Ranjit!


//how js works behind the scenes
//execution context creation
//hoisting
//code execution
//call stack
//memory heap
//event loop

//execution context creation
//global execution context
//function execution context
//eval execution context

//how js memory works //need more study
//memory creation phase
//memory allocation phase
//execution phase




//control flow of js or logic flow
//sequential
//conditional
//looping
//function call

//conditional statements
// if, else if, else
// const age = 18;
// if (age < 18) {
//     console.log("You are a minor");
// } else if (age === 18) {
//     console.log("You are just an adult");
// } else {
//     console.log("You are an adult");
// }
//switch case
// const day = sunday = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// switch (day) {
//     case "sunday":
//          console.log("It's weekend");
//     case "monday":
//     case "tuesday":
//     case "wednesday":
//     case "thursday":
//     case "friday":
//     case "saturday":
//         console.log("It's weekend");
//         break;
//     default:
//         console.log("Invalid day");
// }

//***logical operators***
// || (or) operator example
// && (and) operator example
// ! (not) operator example
// == (equality) operator example
// === (strict equality) operator example
// != (inequality) operator example

//switch can be used with strings and numbers

//ternary operator
// const isLoggedIn = true;
// const message = isLoggedIn ? "Welcome back!" : "Please log in.";
// console.log(message); //Welcome back!

//truthy and falsy values
//falsy values: false, 0, "", null, undefined, NaN ,0,-0, BigInt 0n,
//truthy values: true, non-zero numbers, non-empty strings, objects, arrays,"0", "false", [], function(){}, etc.
// emptyArray = [];
// if (emptyArray.length === 0) {
//     console.log("Array is empty");
// } else {
//     console.log("Array is not empty");
// }
// const str = " ";
// if (str) {
//     console.log("String is truthy");
// } else {
//     console.log("String is falsy");
// }


// *********************important concept***********************
// const emptyObj = {};
// if (Object.keys(emptyObj).length === 0) { //Highlighted line important concept
//     console.log("Object is empty");
// } else {
//     console.log("Object is not empty");
// }
// 0 == "" //true
// 0 === "" //false
// null == undefined //true
// false == 0 //true
// false === 0 //false


// Nullish Coalescing Operator (??)
// const userInput = null;
// const defaultValue = "Default Value";
// const finalValue = userInput ?? defaultValue; //finalValue will be "Default Value" because userInput is null
// console.log(finalValue); //Output: Default Value
// const response = null ?? fetchData() ?? "No Data";
// console.log(response); //Output: Data from API or No Data if fetchData() returns null or undefined

// Optional Chaining Operator (?.)
// const user = {
//     name: "Ranjit",
//     address: {
//         street: "123 Main St",
//         city: "Metropolis"
//     }
// };
// const userCity = user.address?.city; //userCity will be "Metropolis"
// console.log(userCity); //Output: Metropolis
// const userZip = user.address?.zipCode; //userZip will be undefined because zipCode does not exist


//High order array loop methods
// const numbers = [1, 2, 3, 4, 5];
// for(const num of numbers) {
//     console.log(num); //1 2 3 4 5
// }
// map
// const squaredNumbers = new Map();
// map.set(1, 1);
// map.set(2, 4);
// map.set(3, 9);
// map.set(4, 16);
// map.set(5, 25);
// console.log(map); //Map(5) { 1 => 1, 2 => 4, 3 => 9, 4 => 16, 5 => 25 }
// it is use for unique key value pair

//*****************important***********************
//for of loop in Objects
// const user = {
//     name: "Ranjit",
//     age: 19,
//     password: "12345"
// };
// for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
// }//key is variable here like i in for loop
//name: Ranjit
//age: 19
//password: 12345

//in from of Arrays
// const colors = ["red", "green", "blue"];
// for (const index in colors) {
//     console.log(`${index}: ${colors[index]}`);
// }//index is variable here like i in for loop
//0: red
//1: green
//2: blue

//***************************important*******************************
//for objects we use for...in loop
//for arrays we use for...of loop and for...Each loop (most of the time)
//for map we use for...of loop


//const ProgrammingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

//callback function 
//**************************important*******************************
//function passed as an argument to another function is called callback function
//it is used in asynchronous programming
//it is used in event handling
//it is used in array methods like forEach, map, filter, reduce etc.
//it is used in promises and async/await
//ex : function callbak(index) { console.log(index); } is a callback function
//  function higherOrderFunction(callback) {
//      for (let i = 0; i < 5; i++) {
//          callback(i);
//      }//calling the callback function
//  }
//  higherOrderFunction(function(index) {
//      console.log(`Callback called with index: ${index}`);
//  });//Callback called with index: 0 ...4
// forEach method
// ProgrammingLanguages.forEach(function(language, index, array) {
//     console.log(language, index, array);
// });//JavaScript 0 [ 'JavaScript', 'Python', 'Java', 'C++', 'Ruby' ] ...

// ProgrammingLanguages.forEach(function(language, index) {
//     console.log(`${index}: ${language}`);// this function is called callback function and it has not any name
// });//0: JavaScript 1: Python 2: Java 3: C++ 4: Ruby
// ProgrammingLanguages.forEach((language, index) => {
//     console.log(`${index}: ${language}`);
// });//0: JavaScript 1: Python 2: Java 3: C++ 4: Ruby
// function logLanguage(language, index) {
//     console.log(`${index}: ${language}`);
// }
// ProgrammingLanguages.forEach(logLanguage);//0: JavaScript 1: Python 2: Java 3: C++ 4: Ruby

//access the Objectdat from a array
// const dbUsers = [
//     {
//         name: "Ranjit",
//         age: 19,
//         password: "12345"
//     },
//     {
//         name: "Alice",
//         age: 25,
//         password: "alice123"
//     },
//     {
//         name: "Bob",
//         age: 22,
//         password: "bob123"
//     }
// ];
// dbUsers.forEach((user) => {
//     console.log(`User : ${user.name}`);
// })
//

//filter 
// const nums = [1,2,3,4,5,6,7,8,9,10];

// const numsData = nums.filter( (item) => {
//     return item;
// } )

// console.log(numsData);

//************************************important******************************
//agar {} use then nedd to write retun keyword to return the value
//but ()use//implicite method kiya hain callback me then just value pass kar do like `(data) => (data) or (data) => data`
//*************************************important*****************************

// const data = [
//   {
//     id: 1,
//     name: "Ranjit Bhandary",
//     age: 19,
//     course: "B.Tech CSE"
//   },
//   {
//     id: 2,
//     name: "Amit Sharma",
//     age: 22,
//     course: "B.Tech ECE"
//   },
//   {
//     id: 3,
//     name: "Sri Roy",
//     age: 18,
//     course: "B.Sc Computer Science"
//   }
// ];

// // const userRequest1 = data.filter((userData) => userData.id % 2 !== 0);
// //const userRequest2 = data.filter((userData) => userData.age < 20);
// const userRequest3 = data.filter((userData) => {
//     return userData.age < 20
// });
// const userRequest4 = data.map((userData) => userData.age < 20)

// console.log(userRequest4);


//chaining in map
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// const response = arr
//             .map( (data) => data*10 )
//             .map( (data) => (data + 1) )
//             .filter((data) => (data%2 !== 0))

// console.log(response);

// const myArr = [1, 2, 3, 4, 5];
// const total = myArr.reduce( function(acc, currval) {
//     return acc + currval;
// }, 0 )
// const total = myArr.reduce( (acc,curr) => acc+curr, 0 )
// console.log(total);

//shoping cart adding
// const shoppingCart = [
//   {
//     id: 1,
//     name: "Wireless Mouse",
//     category: "Electronics",
//     price: 799,
//     quantity: 2,
//     inStock: true,
//     brand: "Logitech",
//   },
//   {
//     id: 2,
//     name: "Bluetooth Headphones",
//     category: "Electronics",
//     price: 1999,
//     quantity: 1,
//     inStock: true,
//     brand: "boAt",
//   },
//   {
//     id: 3,
//     name: "Cotton T-Shirt",
//     category: "Clothing",
//     price: 499,
//     quantity: 3,
//     inStock: true,
//     brand: "H&M",
//   },
//   {
//     id: 4,
//     name: "Sports Shoes",
//     category: "Footwear",
//     price: 2499,
//     quantity: 1,
//     inStock: false,
//     brand: "Nike",
//   },
//   {
//     id: 5,
//     name: "Wrist Watch",
//     category: "Accessories",
//     price: 1499,
//     quantity: 1,
//     inStock: true,
//     brand: "Fastrack",
//   },
// ];

// const totalCartPrice = shoppingCart.reduce( function(acc, card) {
//     return acc + card.price
// }, 0 )

// console.log(totalCartPrice);



//****************************************************Thank_You******************************************************