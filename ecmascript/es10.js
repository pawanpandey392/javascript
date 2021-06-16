
// Array.flat()
console.log('1. Array.flat() :- ');
let arr = [1, 2, 3, 4, 5, [6, 7, 8, 9, [10]]];
console.log(arr.flat().flat());

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Array.flatMap()
console.log('\n2. Array.flatMap() :- ');
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.map(x => [x, x * 2]))
console.log(arr1.flatMap(x => [x, x * 2]))

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.fromEntries() - Example 1
console.log('\n3. Object.fromEntries() - Example 1 :- ');
let arr2 = {
  name: 'Stefan Salvatore',
  age: '165 Years Old',
  species: 'Vampire'
};
let entries = Object.entries(arr2);
let fromEntries = Object.fromEntries(entries);
console.log(entries);
console.log(fromEntries);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.fromEntries() - Example 2
console.log('\n4. Object.fromEntries() - Example 2 :- ');
let entries1 = new Map([
  [ 'name', 'Stefan Salvatore' ],
  [ 'age', '165 Years Old' ],
  [ 'species', 'Vampire' ]
]);
let fromEntries1 = Object.fromEntries(entries1);
console.log(fromEntries1);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// String.trimStart() & String.trimEnd()
console.log('\n5. String.trimStart() & String.trimEnd() :- ');
let string = '      Hello World.      ';
console.log(JSON.stringify(string.trimStart()));
console.log(JSON.stringify(string.trimEnd()));
console.log(JSON.stringify(string.trimStart().trimEnd()));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Optional Catch Binding
console.log('\n6. Optional Catch Binding :- ');
try {
  throw new Error('This is Optional Catch Binding.');
} catch {
  console.log('Optional Catch Binding with no params.');
}

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Function.toString()
console.log('\n7. Function.toString() :- ');
function sayHelloWorld () {
  let params = {name: 'Damon Salvatore'}
  console.log(`Hello ${params.name}`);
}
console.log(sayHelloWorld.toString());

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Symbol.description
console.log('\n8. Symbol.description :- ');
let mySymbol = 'Hello Damon';
let symObj = Symbol(mySymbol);
console.log(symObj);
console.log(String(symObj) === `Symbol(${mySymbol})`);
console.log(symObj.description);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Well Formed JSON.Stringify()
console.log('\n9. Well Formed JSON.Stringify() :- ');
JSON.stringify('𝌆');
JSON.stringify('\uD834\uDF06');

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Array.Sort Stability
console.log('\n10. Array.Sort Stability :- ');
let rating = [
  {name: 'Mike', age: 14},
  {name: 'Chad', age: 13},
  {name: 'Nick', age: 12},
  {name: 'Eminem', age: 12},
  {name: 'Rose', age: 12},
  {name: 'Diana', age: 13},
  {name: 'Megan', age: 12},
  {name: 'Hila', age: 14},
  {name: 'Ronan', age: 12},
  {name: 'Josh', age: 14},
  {name: 'Josey', age: 13},
]
rating.sort((a, b) => a.age - b.age);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// JSON ⊂ ECMAScript (JSON Superset)
console.log('\n11. JSON ⊂ ECMAScript (JSON Superset) :- ');
const LS = "";
const PS = eval("'\u2029'");
console.log(LS);
console.log(PS);