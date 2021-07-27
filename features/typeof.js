
console.log(typeof null); // Typeof null is an Object
console.log(typeof {}); // Typeof of an empty object is also an Object
console.log(typeof Object); // Typeof of an Object is a Function
console.log(typeof null === typeof Object); // Will be false
console.log(typeof null === typeof {}); // Will be true

console.log(typeof undefined); // Will be undefined

let arrow = () => {};
console.log(typeof arrow); // Will be a function
console.log(typeof function() {}); // Will be a function

console.log(typeof '');
console.log(typeof String); // Typeof of a String is a Function

console.log(typeof Function); // Typeof of a Function is a Function