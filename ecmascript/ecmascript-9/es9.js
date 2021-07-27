
// Rest/Spread Properties
console.log('1. Rest/Spread Properties :- ');
// Rest Properties
const { first, second, ...others } = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 };
console.log(first);
console.log(second);
console.log(others);
// Spread Properties
const items = { first, second, ...others }
console.log(items);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Asynchronous iteration
console.log('\n2. Asynchronous iteration :- ');
for await (const line of readLines(filePath)) {
  console.log(line)
}

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Promise.prototype.finally()
console.log('\n3. Promise.prototype.finally() :- ');
fetch('file.json')
  .then(data => data.json())
  .catch(error => console.error(error))
  .finally(() => console.log('finished'))