
// Default Parameters
console.log('1. Default Parameters :- ');
function calculateAge (defaultAge = 10) {
  console.log(`Your default age is ${defaultAge}`);
}
calculateAge();
calculateAge(12);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Template Literals
console.log('\n2. Template Literals :- ');
let firstName = 'Caroline',
    lastName = 'Forbes';
let name = `Your name is ${firstName} ${lastName}.`;
console.log(name);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Multi-line Strings
console.log('\n3. Multi-line Strings :- ');
let poem = `Johny Johny Yes Papa,
            Eating sugar?  No, papa!
            Telling lies? No, papa!
            Open your mouth Ah, ah, ah!`;
console.log(poem);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Destructuring Assignment
console.log('\n4. Destructuring Assignment :- ');
let {age, a: status = false} = {age: 42, isAlive: true, livesIn: 'Nova Scotia'};
let {livesIn, isAlive, ...newBe} = {age: 42, isAlive: true, livesIn: 'Nova Scotia', a: true};
console.log(status);
console.log(age);
console.log(livesIn);
console.log(isAlive);
console.log(newBe);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Enhanced Object Literals
console.log('\n5. Enhanced Object Literals :- ');
function getLaptop(make, model, year) {
   return {make, model, year}
}
getLaptop('Apple', 'MacBook', '2015');

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Arrow Functions
console.log('\n6. Arrow Functions :- ');
let arrowFunction = (params) => {
  console.log('Hey there, I am an Arrow function.');
  console.log(`I can even take params like ${params}`);
};
arrowFunction('Alienated Behaviour');

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Block-Scoped Constructs Let and Const
console.log('\n7. Block-Scoped Constructs Let and Const :- ');
function calculateAmount (boolVal) { 
  let amount = 0;
  if (boolVal) {
    let amount = 1;
  }
  return amount;
}
console.log(calculateAmount(true)); 

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Classes
console.log('\n8. Classes :- ');
class Profile {
  constructor(firstName, lastName = '') {
    this.firstName = firstName;
    this.lastName = lastName;
  }
 
  getName() {
    console.log(`Name: ${this.firstName} ${this.lastName}`);    
  } 
}
let profileObj = new Profile('Damon', 'Salvatore');
profileObj.getName();

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Modules
console.log('\n9. Modules :- ');
export var userID = 10; 
export function getName(name) {};

import {userID, getName} from 'module';
console.log(userID);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Promises
console.log('\n10. Promises :- ');
let promise = new Promise((resolve, reject) => {
  console.log('I am inside a Promise.');
  resolve();
}).then(() => {
  console.log('Then I got resolved.');
  reject();
}).catch(() => {
  console.log('Then I got rejected.');
}).finally(() => {
  console.log('Finally I am here.');
});