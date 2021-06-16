
// Object.defineProperties() & Object.defineProperty()
console.log(`\nThe Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.`);

console.log(`\nObject.defineProperties() :- `);
console.log('Can add multiple properties to an object.');

const object = {};
Object.defineProperties(object, {
  property: {
    value: 40002, // Default value is undefined | Data Property Attributes
    enumerable: true, // Defaults to false | Shared Attributes
    configurable: true, // Defaults to false | Shared Attributes
    // get() { return 'value'; }, // Accessor property attributes
    // set(newValue) { value = newValue; } // Accessor property attributes
  },
  property1: {
    value: 42022, // Default value is undefined
    writable: true // Defaults to false
  }
});

let descriptor1 = Object.getOwnPropertyDescriptor(object, 'property');
let descriptors1 = Object.getOwnPropertyDescriptors(object);

console.log('Value :- ', descriptor1.value);
console.log('Value :- ', descriptors1.property1.value);


console.log(`\n----------------- SEPARATOR -----------------\n`);


console.log(`Object.defineProperty() :- `);
console.log('Can only add single property to an object.');

const object1 = {};
Object.defineProperty(object1, 'property', {
  value: 42, // Default value is undefined | Data Property Attributes
  writable: true, // Defaults to false | Data Property Attributes
  enumerable: false, // Defaults to false | Shared Attributes
  configurable: true, // Defaults to false | Shared Attributes
});

let descriptor = Object.getOwnPropertyDescriptor(object1, 'property');
let descriptors = Object.getOwnPropertyDescriptors(object1);

console.log('Value :- ', descriptor.value);
console.log('isWritable :- ', descriptor.writable);
console.log('isEnumerable :- ', descriptor.enumerable);
console.log('isConfigurable :- ', descriptor.configurable);
console.log('\n');
console.log('Value :- ', descriptors.property.value);
console.log('isWritable :- ', descriptors.property.writable);
console.log('isEnumerable :- ', descriptors.property.enumerable);
console.log('isConfigurable :- ', descriptors.property.configurable);

console.log(`\n----------------- SEPARATOR -----------------\n`);


// Object.getOwnPropertyNames()
console.log(`Object.getOwnPropertyNames() :- `);
console.log('The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.');

console.log(`\nThe difference between Object.keys() & Object.getOwnPropertyNames() is that, it returns the 'array of keys' of an object even if it is 'non-enumerable' while Object.keys() does not return the non-enumerable properties.`);

const objects1 = { a: 1, b: 2, c: 3 };
console.log(Object.getOwnPropertyNames(objects1));
console.log(Object.getOwnPropertyNames(object1));
console.log(Object.keys(object1));
console.log('propertyIsEnumerable :- ', object1.propertyIsEnumerable('property'));
console.log('propertyIsEnumerable :- ', objects1.propertyIsEnumerable('c'));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.prototype.hasOwnProperty()
console.log(`Object.prototype.hasOwnProperty() :- `);
console.log(`The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).`);

const object3 = {property1: 'Dhichkyaaaaaonn..'};

console.log(object3.hasOwnProperty('property1'));
console.log(object3.hasOwnProperty('toString'));
console.log(object3.hasOwnProperty('hasOwnProperty'));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.getPrototypeOf()
console.log('Object.getPrototypeOf() :- ');
console.log(`The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.`);

const prototype1 = {};
const nobject1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(nobject1));
console.log(Object.getPrototypeOf(object1));
console.log(Object.getPrototypeOf(nobject1) === prototype1);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.setPrototypeOf()
console.log('Object.setPrototypeOf() :- ');
console.log(`The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.`);

let dict = Object.setPrototypeOf({}, null);
console.log(dict);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.prototype.isPrototypeOf()
console.log('Object.prototype.isPrototypeOf() :- ');
console.log(`The isPrototypeOf() method checks if an object exists in another object's prototype chain.`);

function object11() {}
function object21() {}

object11.prototype = Object.create(object21.prototype);
const object31 = new object11();

console.log(object11.prototype.isPrototypeOf(object31));
console.log(object21.prototype.isPrototypeOf(object31));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.preventExtensions()
console.log('Object.preventExtensions() :- ');
console.log(`The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).`);

const object12 = {};
Object.preventExtensions(object12);
console.log('Is Object Extensible :- ', Object.isExtensible(object12));

try {
  Object.defineProperty(object12, 'property', {
    value: 42
  });
} catch (e) {
  console.log('TypeError: Cannot define property property1, object is not extensible');
  // console.log(e); // TypeError: Cannot define property property1, object is not extensible
}

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.prototype.toString()
console.log('Object.prototype.toString() :- ');
console.log(`The toString() method returns a string representing the object.`);
// Example 1
function Dog(name) {
  this.name = name;
}

const dog1 = new Dog('Gabby');

Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};
console.log(dog1.toString());

// Example 2
let newObj = {a: 'New Value', b: 'Old Value'};
console.log(newObj.toString());
console.log(Object.toString(newObj));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.prototype.valueOf()
console.log('Object.prototype.valueOf() :- ');
console.log(`The valueOf() method returns the primitive value of the specified object.`);

function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function() {
  return this.number;
};

const object14 = new MyNumberType(4);
console.log(object14 + 3);