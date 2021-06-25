// ------------------------------------------------------------------
// Accessing an Object Property
// ------------------------------------------------------------------

const smartphones = {
    brands: {
        apple: true
    }
}

// output is: ‘true’
console.log(smartphones.brands.apple);

// output is: undefined, with no errors
console.log(smartphones.companies?.motorola);

// output is: TypeError: Cannot read property 'motorola' of undefined
console.log(smartphones.companies.motorola);


// ------------------------------------------------------------------
// Accessing an Array
// ------------------------------------------------------------------

let smartphone =  ['apple', 'samsung', 'motorola'];

// output is: samsung
console.log(smartphone[1]);

// output is: TypeError: Cannot read property '1' of null
smartphone = null
console.log(smartphone[1]);

// output is: undefined
console.log(smartphone?.[1]);


// ------------------------------------------------------------------
// Calling a Function
// ------------------------------------------------------------------

let phoneApple = () => {
  return '11 Pro Max'
}

// output is: 11 Pro Max
console.log(phoneApple());

// output is: TypeError: phoneApple is not a function
phoneApple = null
console.log(phoneApple());

// undefined
console.log(phoneApple?.());


// More chaining
const zipcode = person?.address?.zipcode;