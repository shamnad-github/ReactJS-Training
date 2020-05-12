// Assignment 1: Compilation of workshop examples

// 1
// The const keyword
console.log('const keyword');
console.log('~~~~~~~~~~~~~');
const message ='My assignment works';
console.log(message);
//message = 'Suyati'; //Will get "Uncaught TypeError: Assignment to constant variable."
console.log('');
// End: The const keyword


// 2
// The let keyword - Block Scope
console.log('let keyword - Block Scope');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~');
var b1=10;
console.log('var b1 before block: ' + b1);

if(true){
  var b1=20;
  console.log('var b1 inside block: ' + b1);
}
console.log('var b1 after block: ' + b1);

let b2 = 10;
console.log('let b2 before block: ' + b2);

if(true){
  let b2 = 20;
  console.log('let b2 inside block: ' + b2);
}
console.log('let b2 after block: ' + b2);
console.log('');
// End: The let keyword - Block Scope


// 3
// The let keyword - Hoisting
console.log('let keyword - Hoisting');
console.log('~~~~~~~~~~~~~~~~~~~~~~');
console.log('var c1 using hoisting: '+c1); //will get 'undefined'
var c1=10;

//console.log('let c2 using hoisting: '+c2);//will get error "Uncaught ReferenceError: Cannot access 'c2' before initialization"
let c2=10;
console.log('');
// End: The let keyword - Hoisting


// 4
// The let keyword - A step towards closure
console.log('let keyword - A step towards closure');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('Click the Red boxes in the window to test it.');

var div;
var container = document.getElementById("container");

for (var i = 0; i < 3; i++) {
  div = document.createElement("div");
  div.onclick = () => {
    alert("This is box #" + i);
  };
  container.appendChild(div);
}

for (let j = 4; j < 7; j++) {
  div = document.createElement("div");
  div.onclick = () => {
    alert("This is box #" + j);
  };
  container.appendChild(div);
}

console.log('');
// End: The let keyword - A step towards closure

// END: The let Keyword


// 5
// Template Strings
console.log('Template Strings');
console.log('~~~~~~~~~~~~~~~~');

const firstName = "Shamnad";
const lastName = "V A";
console.log(`Hey "${firstName}, ${lastName}"`);

console.log('');
// END: Template Strings


// 6
// Default Parameters
console.log('Default Parameters');
console.log('~~~~~~~~~~~~~~~~~~');

function sayHello(entity = "World") {
  console.log(`Hello ${entity}!`);
}
sayHello("Suyati");
sayHello();

console.log('');
// END: Default Parameters


// 7
// Arrow Functions
console.log('Arrow Functions');
console.log('~~~~~~~~~~~~~~~');

const greet = entity => `Hello, ${entity}!`;
console.log(greet("Suyati"));

const customGreet = (greet, entity) => {
  if (!greet) {
    greet = "Hello";
  }

  if (!entity) {
    entity = "World";
  }

  return `${greet}, ${entity}!`;
};
 console.log(customGreet("Hello", "Suyati"));
 console.log(customGreet());

 console.log('');
// END: Arrow Functions

// 8
// Arrow Functions - A closure
console.log('Arrow Functions - A closure');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~');

const triveni1 = {
  rivers: ["Ganga", "Yamuna", "Saraswati"],
  display: function(delay = 1000) {
    //debugger;
    setTimeout(function() {
     // debugger;
      console.log(this.rivers.join(", "));
    }, delay);
  }
};

//triveni1.display(); //Uncaught TypeError: Cannot read property 'join' of undefined


const triveni2 = {
  rivers: ["Ganga", "Yamuna", "Saraswati"],
  display: function (delay = 1000) {
    //debugger;
    console.log(this.rivers.join(", "));
    setTimeout(() => {
      //debugger;
      //console.log(this.rivers.join(", "));
    }, delay);
  },
};

 triveni2.display();


console.log('');
// END: Arrow Functions - A closure


// 9
// Destructuring Objects
console.log('Destructuring Objects');
console.log('~~~~~~~~~~~~~~~~~~~~~');

const myAddress = {
  place: "Aluva",
  district: "ERNAKULAM",
  state: "KERALA",
  country: "INDIA"
};

const { state, country } = myAddress;

console.log(state, country);

const printDistrict = (myAddress) => {
  console.log(`My district is ${myAddress.district}`);
}
printDistrict(myAddress);

console.log('');
 // END: Destructuring Objects

 // 10
 // Destructuring Arrays
 console.log('Destructuring Arrays');
console.log('~~~~~~~~~~~~~~~~~~~~~');

const nicknames = ["Master Blaster", "God of the Off Side", "The Wall"];

const [sachin] = nicknames;
console.log(`Sachin's nickname is ${sachin}`);

const [, , Dravid ] = nicknames;
console.log(`Dravid's nickname is ${Dravid}`);

console.log('');
 // END: Destructuring Arrays


 // 11
 // Object Literal Enhancement
console.log('Object Literal Enhancement');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');

const 
  city = "Aluva",
  district = "ERNAKULAM",
  zip = "683511";

const myAddress1 = {
  city,
  district,
  zip,
  printHouseName() {
    console.log(`My district is ${this.district}`);
  },
};

console.log(myAddress1);
console.log(`My city is ${myAddress1.city}`);
myAddress1.printHouseName();

console.log('');
 // END: Object Literal Enhancement

 // 12
 // The Spread Operator
 console.log('The Spread Operator');
 console.log('~~~~~~~~~~~~~~~~~~~');
 
const lalega = [
  "Barcelona",
  "Real Madrid",
  "Athletico Madrid",
  "Valencia"
];
const epl = [
  "Liverpool",
  "Man City",
  "Man United",
  "Chelsea",
  "Arsenal"
];

const europianClubs = [...lalega, ...epl];
console.log(`Some Europian football clubs aee: ${europianClubs}`);

const [favorite, ...others] = europianClubs;
console.log(`My favorite football club: ${favorite}`);
console.log(`Other football clubs: ${others}`);

const islClubs = (...clubs) => {
  const [kerala, ...rest] = clubs;
  console.log(`The ISL club from Kerala is ${kerala}.`);
}
islClubs("Blasters", "ATK", "Chennaiyin");

console.log('');
 // END: The Spread Operator

 // 13
 // XMLHttpRequest

 function onResponse() {
  var data = JSON.parse(this.responseText);
  console.log(`Response from XHR call: ${data}`);
}

function onError(error) {
  console.log(error);
}

var xhrRequest = new XMLHttpRequest();
xhrRequest.onload = onResponse;
xhrRequest.onerror = onError;
xhrRequest.open('get', 'https://randomuser.me/api/', true);
xhrRequest.send();

 // END: XMLHttpRequest


 // 14
 // jQuery Ajax

 $.ajax("https://randomuser.me/api/")
 .then(function (data) {
   console.log(`Response from AJAX call: ${data}`);
 })
 .catch(function (error) {
   console.log(error);
 });
 // END: jQuery Ajax


 // 15
 // Fetch API
 console.log('Fetch API');
 console.log('~~~~~~~~~');

fetch("https://randomuser.me/api/")
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`Request failed with status - ${response.status}`);
    }

    // response is a stream
    response.json().then((data) => {
      console.log(`Response from Fetch call: ${data}`);
      console.log(`The random email id from Fetch call: ${data.results[0].email}`)
    });
  })
  .catch((error) => {
    console.log(error);
  });

  console.log('');
 // END: Fetch API


// 16
// Async/Await
console.log('Async/Await');
console.log('~~~~~~~~~~~');

const getRandomUser = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const user = await response.json();
  console.log(`Response from async fn: ${user}`);
}
getRandomUser();

console.log('');
// END: Async/Await


// 17
// OOP prior to ES6

function PersonClass2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

PersonClass2.prototype.print = function () {
  console.log(
    `{ firstName: "${this.firstName}", lastName: "${this.lastName}" }`
  );
};

const gk1 = new PersonClass2("Shamnad", "V A");
gk1.print();

// END: OOP prior to ES6


// 18
// ES6 Classes


class PersonClass1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  print() {
    console.log(
      `{ firstName: "${this.firstName}", lastName: "${this.lastName}" }`
    );
  }
}

const shamnad = new PersonClass1("Shamnad", "V A");
shamnad.print();

PersonClass1.prototype.greet = function () {
  console.log(`Hey "${this.lastName}, ${this.firstName}"`);
};
shamnad.greet();

// END: ES6 Classes


// 19
// ES6 Modules

import { print } from "./modules/logger.js";
print("We are done for the day!");
// END: ES6 Modules
