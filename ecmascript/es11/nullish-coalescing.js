
// Thruthy value without Nullish Coalescing
let theNumber = 7
let numb = theNumber || 5
console.log(numb) // output is: 7


// Falsy value with Nullish Coalescing
let number = 0
let num = number ?? 5
console.log(num) // output is: 0


// Null value with Nullish Coalescing
let theNumber = null
let number = theNumber ?? 5
console.log(number) // output is: 5


// More Example
undefined ?? "string" // -> "string"
null ?? "string" // -> "string"
false ?? "string" // -> false
NaN ?? "string" // -> NaN