
// Array.prototype.includes
console.log('1. Array.prototype.includes :- ');
let arr = ['a', 'b', 'c'];
console.log(arr.includes('b'));
console.log(arr.includes('d'));
console.log(arr.includes('c', 2));
console.log(arr.includes('c', 3));
console.log(['a', 'b', NaN].includes(NaN));
console.log('a123b'.includes('123'));
console.log(arr.includes('c', '11eeee'));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Exponentiation Operator (**)
console.log('\n1. Exponentiation Operator (**) :- ');
console.log(2 ** 3)
console.log(2 ** 4)