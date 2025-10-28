// ====================== TYPE CONVERSION ======================

console.log("=== Type Conversion ===");

console.log(Number("33")); // 33
console.log(Number("33abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("Ranjit")); // true

console.log("1" + 2); // 12
console.log("1" - 2); // -1
console.log(1 + 2 + "3"); // 33
console.log("3" + 2 + 1); // 321

// ====================== STRING INTERPOLATION ======================

const name = "Ranjit";
const age = 19;
console.log(`My name is ${name} and my age is ${age}`);

// ====================== OBJECTS ======================

const person = {
  name: "Ranjit",
  age: 19,
  hobbies: ["coding", "reading", "gaming"],
};

console.log(person.name);
console.log(person.hobbies[0]);

const sym1 = Symbol("id");
const user = {
  [sym1]: "uniqueID",
  greet() {
    return `Hello, ${this.name}!`;
  },
  name: "Ranjit",
};

console.log(user.greet());
console.log(user[sym1]);

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged);

// ====================== ARRAYS ======================

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);
numbers.push(6);
console.log(numbers);
numbers.pop();
console.log(numbers);

const food = ["apple", "banana"].concat(["carrot", "potato"]);
console.log(food);

const nested = [1, [2, [3, [4]]]];
console.log(nested.flat(Infinity));

const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first, second);

// ====================== FUNCTIONS ======================

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet());
console.log(greet("Ranjit"));

const square = (n) => n * n;
console.log(square(5));

function displayUser({ name, age }) {
  return `User: ${name}, Age: ${age}`;
}
console.log(displayUser({ name: "Alice", age: 25 }));

// ====================== SCOPE & HOISTING ======================

var x = 5;
let y = 10;
console.log(x, y);

function testScope() {
  let a = 10;
  const b = 20;
  console.log(a + b);
}
testScope();

function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
console.log(counter());

// ====================== CONTROL FLOW ======================

let ageCheck = 18;
if (ageCheck < 18) console.log("Minor");
else if (ageCheck === 18) console.log("Just adult");
else console.log("Adult");

const day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

const isLoggedIn = true;
console.log(isLoggedIn ? "Welcome back!" : "Please log in.");

// ====================== TRUTHY & FALSY ======================

if ("") console.log("Truthy");
else console.log("Falsy String");

if ([]) console.log("Truthy Array");

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) console.log("Empty Object");

console.log(0 == ""); // true
console.log(0 === ""); // false
console.log(null == undefined); // true

// ====================== LOOPS ======================

const arr = [1, 2, 3, 4, 5];
for (const num of arr) console.log(num);

const userInfo = { name: "Ranjit", age: 19, email: "ranjit@example.com" };
for (const key in userInfo) console.log(`${key}: ${userInfo[key]}`);

// ====================== HIGHER ORDER METHODS ======================

const nums = [1, 2, 3, 4, 5];
const doubled = nums.map((n) => n * 2);
console.log(doubled);

const even = nums.filter((n) => n % 2 === 0);
console.log(even);

const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// ====================== PART 2: ADVANCED JAVASCRIPT ======================

// ====================== DOM MANIPULATION & EVENTS ======================

const val = document.createElement('h1');
val.appendChild(document.createTextNode("Hello DOM!"));
document.querySelector("#heading").appendChild(val);

document.getElementById("heading").addEventListener("click", (e) => {
  console.log("Clicked Element:", e.target.tagName);
  console.log("Event Type:", e.type);
  console.log("ClientX:", e.clientX, "ClientY:", e.clientY);
});

// ====================== PROMISES & ASYNC/AWAIT ======================

const promiseOne = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Response");
    resolve();
  }, 1000);
});

promiseOne.then(() => console.log("Promise consumed"));

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ name: "Cyclone", id: 76895473219, level: 99 });
    } else {
      reject("Error: Something went wrong!");
    }
  }, 1000);
});

promiseFour
  .then((data) => {
    console.log("✅ Data received:", data);
    return data.name;
  })
  .then((name) => console.log("Chained Name:", name))
  .catch((err) => console.log("❌", err))
  .finally(() => console.log("Promise completed"));

const promiseFive = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ name: "Cyclone", level: 99 });
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log("Async/Await Response:", response);
  } catch (err) {
    console.log("Error:", err);
  }
}
consumePromiseFive();

// ====================== OOP: CLASSES, PROTOTYPE, INHERITANCE ======================

function setUserName(username) {
  this.username = username;
}

function CreateUser(username, id) {
  setUserName.call(this, username);
  this.id = id;
  this.password = "default#123";
}

const userOne = new CreateUser("Ranjit", 101);
console.log(userOne);

class User {
  constructor(username, id, password) {
    this.username = username;
    this.id = id;
    this.password = password;
  }

  static encryptPassword(password) {
    return `${password}_encrypted`;
  }
}

class Student extends User {
  constructor(username, id, password, isStudent) {
    super(username, id, password);
    this.isStudent = isStudent;
  }
}

const userTwo = new Student("Cyclone", 202, "abc123", true);
console.log(userTwo);
console.log(Student.encryptPassword("abc123"));

// Prototype example
String.prototype.trueLength = function () {
  console.log(`True length of '${this.trim()}':`, this.trim().length);
};

"   Ranjit   ".trueLength();

// ====================== GETTERS & SETTERS ======================

class StudentInfo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    if (newName.length < 3) {
      console.log("❌ Name too short!");
      return;
    }
    this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge < 0) {
      console.log("❌ Invalid age!");
      return;
    }
    this._age = newAge;
  }
}

const student1 = new StudentInfo("Ranjit", 21);
console.log(student1.name, student1.age);
student1.name = "Raj";
student1.age = 23;
console.log(student1.name, student1.age);

// ====================== CLOSURES & LEXICAL SCOPING ======================

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

console.log("\nAll advanced JavaScript topics executed successfully! ✅");
