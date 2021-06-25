// 2^53 – 1 is the maximum number you can represent in JavaScript. But with JavaScript ES11 update, BigInt will support the creation of numbers that are bigger than that. You can view the maximum number that can be represented in JavaScript for yourself by executing the below code.

console.log(Number.MAX_SAFE_INTEGER); // output is: 9007199254740991

// Case (i): When you add 1 to this number:
const maxNum = Number.MAX_SAFE_INTEGER;
console.log(maxNum +1); // output is: 9007199254740992  

// Case (ii): When you add 10 to this number:
const maxNum = Number.MAX_SAFE_INTEGER;
console.log(maxNum +10); // output is: 9007199254741000 which is wrong.

// Please Note: The right output is 9007199254741001.

// ------------------------------------------------------------------------

// Hence, when you implement BigInt by adding the alphabet ‘n’ at the end of your number, you will get the correct output/result.

const maxNum = 9007199254740991n;

// Case (i): When you add 1 to this number:
const maxNum = 9007199254740991n;
console.log(maxNum +1n); // output is: 9007199254740992n

// Case (ii): When you add 10 to this number:
const maxNum = 9007199254740991n;
console.log(maxNum +10n); // output  is: 9007199254741001n


// Also, it is important to not mix BigInt with other types:

const maxNum = 9007199254740991n;
// output is: Cannot mix BigInt and other types, use explicit conversions
console.log(maxNum +10);