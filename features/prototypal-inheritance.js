let arr = [];

// console.log(arr);
// console.log(typeof arr);
// console.log(typeof arr.__proto__);
// console.log(typeof arr.__proto__.__proto__);
// console.log(typeof arr.__proto__.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);






// undefined

/*

// arr.__proto__ vs Array.prototype
arr.__proto__ === Array.prototype
true

// arr.__proto__.__proto__ vs Object.prototype
arr.__proto__.__proto__ === Object.prototype
true

Array.prototype
Array.prototype.__proto__
arr.__proto__.__proto__

JSON.stringify(arr.__proto__.__proto__) ----->> "{}"
JSON.stringify(arr.__proto__) ----->> "[]"
JSON.stringify(arr) ----->> "[]"
JSON.stringify(arr.__proto__.__proto__.__proto__) ----->> "null"
JSON.stringify(arr.__proto__.__proto__) ----->> "{}"

arr.__proto__.__proto__
arr.__proto__.__proto__.__proto__
null
arr.__proto__.__proto__.__proto__.__proto__
arr.__proto__.__proto__.__proto__
null
arr.__proto__.__proto__

arr.__proto__.__proto__ === Object.prototype
true

*/