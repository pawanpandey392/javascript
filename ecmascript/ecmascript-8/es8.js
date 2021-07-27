
// Object.values() & Object.entries()
console.log('1. Object.values() & Object.entries() :- ');
let arr = {
  'key': 'value',
  'key1': 'value',
  'key2': 'value'
};
console.log(Object.keys(arr));
console.log(Object.values(arr));
console.log(Object.values('arr'));
console.log(Object.entries(arr));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// String.prototype.padStart() & String.prototype.padEnd()
console.log('2. String.prototype.padStart() & String.prototype.padEnd() :- ');
// padStart()
console.log(JSON.stringify('Javascript'.padStart(10)));
console.log(JSON.stringify('Javascript'.padStart(12)));
console.log(JSON.stringify('Javascript'.padStart(15, 'x')));
console.log(JSON.stringify('Javascript'.padStart(15, 'hey world')));
console.log(JSON.stringify('Javascript'.padStart(1)));
// padEnd()
console.log(JSON.stringify('Javascript'.padEnd(10)));
console.log(JSON.stringify('Javascript'.padEnd(12)));
console.log(JSON.stringify('Javascript'.padEnd(15, 'x')));
console.log(JSON.stringify('Javascript'.padEnd(15, 'hey world')));
console.log(JSON.stringify('Javascript'.padEnd(1)));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.getOwnPropertyDescriptors
console.log('3. Object.getOwnPropertyDescriptors :- ');
Object.freeze(arr);
console.log(Object.getOwnPropertyDescriptors(arr));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Trailing commas in function parameter lists
console.log('4. Trailing commas in function parameter lists :- ');
function trail (a, b, c,) {
  let obj = {key: 'value',};
  console.log('This is an example for trailing comma.');
  console.log(obj);
}
trail(2, 3, 5);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Async Functions
console.log('5. Async Functions :- ');
function delayMe () {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('Hi, I will say hi after 5 seconds.');
    }, 5000);
  })
}
async function getContentFromMyWebsite () {
  let delay = await delayMe();
  console.log(delay);
}
getContentFromMyWebsite();