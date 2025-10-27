// const val = document.createElement('h1')
// val.appendChild(document.createTextNode("hello"))
// document.querySelector("#heading").appendChild(val)

// //events
// document.getElementById("heading").addEventListener("click",(a) => (console.log(a))
// , false)
//**********************************important************************************
//type,timestamp,hight,weidth,defaultPrevented,
//target,toElement, srcElement, currentTarget,
//clint x, clintY,dcreenx, screenY
//altkey, ctrlkey, shift key, keycode

//event propograsion//bubble propograsion
//inside to outside //two type //public and capturing
//how to stop ?
//document.getElementById("heading").addEventListener("click",(a) => (console.log("clicked"), a.stopPropogration)
// , false)
///document.getElementById("heading").addEventListener("click",(a) => (console.log("clicked"), a.preventDefault())
// , false)//to stope a element default proparty(

// //remove  a item 
// *****************imp******************
//document.getElementById("heading").addEventListener("click",function (e) {
// console.log (e.target.tagName === "IMG")
//if (e.target.tagName === "IMG"){
//(console.log(e.target.parentNode),
// let remove =e.target.parentNode,
// removeIt.remove()
//}
//}, false)


//promise
// const promiseOne = new Promise(function(resolve, reject){
//     //do async work
//     //DB calls , CryptoGraphy, network call
//     setTimeout(() => {
//         console.log("Response");
//         resolve();
//     }, 1000);
// });

// promiseOne.then (function(){
//     console.log("promise consume");
// });

// new Promise(function (resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     }, 1000) 
// }).then (function () {
//     console.log("Async 2 resolve");
// })


//send data and accept data

// new Promise(function (resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve({
//             user : "Cyclone",
//             points : 20,
//             sex : "M"
//         });
//     }, 1000) 
// }).then (function (userData) {
//     console.log(userData);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         let error = false;
//         if (!error){
//             resolve({
//                 name : "Cyclone",
//                 id : 76895473219,
//                 level : 99,
//                 sex : "M",
//                 isActive : true
//             })
//         }
//         else{
//             reject("ERROR : Somthing went wrong!") 
//         }
//     }, 1000);
// });

// promiseFour
// .then(function(userData) {
//     console.log("✅ Data received:", userData);
//     return userData.name
// })
// .then(function(returnData) {// chaing methode use here
//     console.log (returnData);
// })
// .catch(function(error) {
//     console.log("❌");
// })
// .finally(() => console.log ("Final result came"));

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         let error = false;
//         if (!error){
//             resolve({
//                 name : "Cyclone",
//                 id : 76895473219,
//                 level : 99,
//                 sex : "M",
//                 isActive : true
//             });
//         }
//         else{
//             reject("ERROR : Something went wrong!"); 
//         }
//     }, 1000);
// });

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive(); // ✅ call the async function


// async function apiResponse (){
//     try {
//         const response = await fetch ("https://api.github.com/");
//         let responseData = await response.json;
//         console.log (response);
//     } catch (error) {
//         console.log("error",error);
//     }
// }

// apiResponse()

// oops
//collection of property and methods
//constractor
//Prototype
//classes 
//instancess(new,this)

//4 pilars
//abstraction 
//encapsution
//Inharitance
//Polymorphisom


//protypeal inharitance
//search from child to parent , grand parent , grand grand parent.... this process callled prototypal inharitance
//this mean jis ne bulya hai this.score


//method creation
// const superheroes = {
//     hero1 : "Thor" ,
//     hero2 : "ironMan",
// }



// Object.prototype.Ranjit = function (){//new property adding
//     console.log(`hi !Ranjit is here`);
    
// }

// console.log(superheroes.Ranjit());

// add a method in main object

// let anotherWord = "Cyclone    ";

// String.prototype.trueLength = function (){
//     console.log(this);
//     console.log(`True lentgh is ${this.trim().length}.`);
// }

// anotherWord.trueLength();

// "Ranjit                ".trueLength();

//*******************************************important********************************************
//this keyword is reffer  to {} in node env but in browser it is reffer to window obj{}


//call and bind 

// function setUserName (username){
//     //complex db task
//     this.username = username;
// }

// function createUser (username, id){
//     this.user = setUserName.call(this, username)
//     this.id = id
//     this.password = "328639%6yrew" ;
// }
// const userOne = new createUser("Ranjit", 7832875);//new key actually creeate a blank object{} to inharite the existing mentioned function

// console.log (userOne);

//class
// class createUser {
//     constructor(username,id, password) {
//         this.username = username;
//         this.id = id;
//         this.password = password;
//     }

//     static encryptPassword(){///for unique
//         return `${this.password}zawfg56hfsg`
//     }
// }

// // const chai = new createUser("Ranjit", 98754 , "78564768");
// // console.log(chai.encryptPassword());

// class student extends createUser {
//     constructor(username, isStudent){
//         super(username);
//         this.isStudent = isStudent;
//     }
// }
// const userTwo = new student("Cyclone" ,true)

// console.log(userTwo);
// console.log(student instanceof createUser);


// descripter
// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter)

//create hard core value(descripter propertySetting)

// const chai = {
//     name : "Darjiling Tea",
//     price : 799 ,
//     isAvialable : true,
// }

// console.log(Object.getOwnPropertyDescriptor(chai ,"name"));

// Object.defineProperty(chai,"price",{
//     writable: false,
//     enumerable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(chai ,"price"));

//getter and setter
// class Student {
//   constructor(name, age) {
//     this.name = name;   // using underscore (_) for internal property
//     this.age = age;
//   }

//   // Getter for name
//   get name() {
//     return this._name.toUpperCase();  // example: modify before returning
//   }

//   // Setter for name
//   set name(newName) {
//     if (newName.length < 3) {
//       console.log("❌ Name must have at least 3 characters!");
//       return;
//     }
//     this._name = newName;
//   }

//   // Getter for age
//   get age() {
//     return this._age;
//   }

//   // Setter for age
//   set age(newAge) {
//     if (newAge < 0) {
//       console.log("❌ Age cannot be negative!");
//       return;
//     }
//     this._age = newAge;
//   }
// }

// // Usage
// const student1 = new Student("Ranjit", 21);
// console.log(student1.name);   // 👉 RANJIT

// student1.name = "Ra";         // ❌ invalid
// student1.age = -5;            // ❌ invalid

// student1.name = "Rajesh";
// student1.age = 22;

// console.log(student1.name);   // 👉 RAJESH
// console.log(student1.age);    // 👉 22


//Lexical Scoping
//a closure gives a function access to its outer scope. In JavaScript,
// closures are created every time a function is created, at function creation time.
// function init() {
//   let name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

//closure
// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   console.log(displayName);
// }

// const myFunc = makeFunc();
// myFunc();

