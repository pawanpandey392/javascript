(function () {
  console.log('This is a log message for anonymous function.\n');
})();

let age = 43;
(function logMe (years = 0) {
  console.log('This is a log message for named function.');
  console.log(`This log message is ${years} years old.\n`);
})(age);

(() => {
  console.log('This is a log message arrow function.');
})();

// Cannot be called from global scope. 
// The function cannot be invoked after it's execution
// logMe();
// console.log('------------------------');