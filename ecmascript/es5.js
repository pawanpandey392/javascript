// ES5 || ES 2009 Features

// VARIABLE INITIALIZATION
let arr = [1, 2, 3, 4, 5];


// The "use strict" Directive
console.log('The "use strict" Directive :- ');
"use strict";
x = 3.14; 

console.log(`\n----------------- SEPARATOR -----------------\n`);

// String.trim()
console.log(`String.trim() :- `);
var str = "       Hello World!        ";
// console.log(String.trim(str));
console.log(str.trim());

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Array.isArray();
console.log(`Array.isArray() :- `);
console.log(Array.isArray(null));
console.log(Array.isArray({}));
console.log(Array.isArray([]));
console.log(Array.isArray('ssss'));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Array.forEach()
console.log(`Array.forEach() :- The forEach() method executes a provided function once for each array element.`);
let a = arr.forEach(x => console.log(x * 5));
console.log(a);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Array.map()
console.log(`Array.map() :- The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. \n`);

let b = arr.map(a => a);

console.log('Given Array :- ', arr);
console.log('Output :- ', b);
console.log('Are both array equal? :- ', arr === b);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Array.filter()
console.log(`Array.filter() :- The filter() method creates a new array with all elements that pass the test implemented by the provided function.`);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
console.log(result);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Array.reduce()
console.log(`Array.reduce() :- The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.`);

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(arr.reduce(reducer));
console.log(arr.reduce(reducer, 15));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Array.reduceRight()
console.log(`Array.reduceRight() :- The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.`);

let reducer1 = (accumulator, currentValue) => accumulator.concat(currentValue);

const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(reducer1);
console.log(array1);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Array.every()
console.log(`Array.every() :- The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.`);

const isBelowThreshold = (currentValue) => currentValue < 40;

const array = [1, 30, 39, 29, 10, 13];
console.log(array.every(isBelowThreshold));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Array.some()
console.log(`Array.some() :- The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.`);
const even = (element) => element % 2 === 0;
const lessThanTwenty = (element) => element < 20;
const moreThanfifty = (element) => element > 50;

console.log(array.some(even));
console.log(array.some(lessThanTwenty));
console.log(array.some(moreThanfifty));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Array.indexOf()
console.log(`Array.indexOf() :- The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.`);

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('bison', 2)); // start from index 2
console.log(beasts.indexOf('giraffe'));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Array.lastIndexOf()
console.log(`Array.lastIndexOf() :- The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.`);

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
console.log(animals.lastIndexOf('Tiger'));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// JSON.parse()
console.log(`JSON.parse() :- The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.`);

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
console.log(obj.result);
// json.result is not parsed and is string.
console.log(json.result);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// JSON.stringify()
console.log(`JSON.stringify() :- The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.`);

console.log(JSON.stringify({ x: 5, y: 6 }));
console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));


console.log(`\n----------------- SEPARATOR -----------------\n`);

// Date.now()
console.log('Date.now() :- The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.');

const start = Date.now();
console.log('It will take 2 seconds to run. Starting timer...');

setTimeout(() => {
  const millis = Date.now() - start;
  console.log(`Seconds elapsed = ${Math.floor(millis / 1000)}`);
}, 2000);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Property Getters and Setters
console.log(`Property Getters and Setters :- `);

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
console.log(`Set fullName is executed with the given value.`);
user.fullName = "Alice Cooper";
console.log(user.name);
console.log(user.surname);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// New Object Property Methods
console.log(`Object.defineProperty() is a new Object method in ES5.`);

var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
};

// Change a Property:
Object.defineProperty(person, "language", {
  value: "EN",
  writable : true,
  enumerable : true,
  configurable : true
});

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing many object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Returns enumerable properties as an array
Object.keys(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Prevents adding properties to an object
Object.preventExtensions(object)
// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)
// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)
// Returns true if object is frozen
Object.isFrozen(object)

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Property Access on Strings
var str = "HELLO WORLD";
str.charAt(0); 
str[0]; 

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Trailing Commas
person = {
  firstName: "John",
  lastName: " Doe",
  age: 46,
}

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Property access [ ] on strings
// Trailing commas in array and object literals
// Multiline string literals
// Reserved words as property names