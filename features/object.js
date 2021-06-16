
// Ways of Creating an Object
let a = new Object();
let b = {};
let c = Object.create({}); // Object.create(null);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.assign()
console.log(`Object.assign() :- The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.`);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
console.log(returnedTarget);
console.log(source);

console.log('\nCloning an Object :- ');
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy);

console.log('\nWarning for Deep Clone :- For deep cloning, we need to use alternatives, because Object.assign() copies property values. If the source value is a reference to an object, it only copies the reference value.');
console.log('\nObject Cloning Methods :- ');
let newObject = {};
let oldObject = {a: 10, b: {c: 20}, d: {e: 30}};
// Method 1
for (let key in oldObject) newObject[key] = oldObject[key];
console.log(`Using 'for in' loop :-  ${JSON.stringify(newObject)}`);

// Method 2
let newObject1 = Object.assign({}, oldObject);
console.log(`Using 'Object.assign' method :-  ${JSON.stringify(newObject1)}`);

// Method 3
let newObject2 = { ...oldObject };
console.log(`Using 'Spread' operator :-  ${JSON.stringify(newObject2)}`);

// Method 4
let newObject3 = { ...oldObject };
console.log(`Using 'Spread' operator :-  ${JSON.stringify(newObject3)}`);

// Method 5
let newObject4 = JSON.parse(JSON.stringify(oldObject));
console.log(`Using 'JSON.parse/JSON.stringify' methods :-  ${JSON.stringify(newObject4)}`);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.entries()
console.log(`Object.entries() :- The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.`);

console.log(`Original Object :- `, oldObject);
console.log(Object.entries(oldObject));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.freeze()
console.log(`Object.freeze() :- The Object.freeze() method freezes an object.`);

const frozenObject = { prop: 42 };
console.log('Is Object Frozen :- ', Object.isFrozen(frozenObject));

Object.freeze(frozenObject);

frozenObject.prop = 33;
console.log(frozenObject.prop);
console.log('Is Object Frozen :- ', Object.isFrozen(frozenObject));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.fromEntries()
console.log(`Object.fromEntries() :- The Object.fromEntries() method transforms a list of key-value pairs into an object.`);

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

console.log(Object.fromEntries(entries));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.is()
console.log(`Object.is() :- The Object.is() method determines whether two values are the same value.`);

// console.log(Object.is(window, window));
console.log(Object.is('foo', 'foo'));
console.log(Object.is('foo', 'bar'));
console.log(Object.is([], []));
console.log(Object.is(null, null));

console.log('\nObject comparision with Object.is()');
let foo = { a: 1, b: {c: 11} };
let bar = { a: 1, b: {c: 11} };
console.log(Object.is(foo, foo));
console.log(Object.is(foo, bar));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.isExtensible()
console.log(`Object.isExtensible() :- The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).`);

const extensibleObj = {};
console.log('Is object extensible :- ', Object.isExtensible(extensibleObj));
Object.preventExtensions(extensibleObj);
console.log('Is object extensible :- ', Object.isExtensible(extensibleObj));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.seal() / Object.isSealed()
console.log(`Object.seal() / Object.isSealed() :- The Object.isSealed() method determines if an object is sealed.`);

const object1 = { property1: 42 };

console.log('Is Sealed :- ', Object.isSealed(object1));
Object.seal(object1);
console.log('Is Sealed :- ', Object.isSealed(object1));

object1.property1 = 33;
console.log(object1.property1);

console.log('Cannot delete when sealed.');
delete object1.property1;
console.log(object1.property1);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.keys()
console.log(`Object.keys() :- The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.`);

const objects1 = {a: 'somestring', b: 42, c: false};
console.log('Object Keys :- ', Object.keys(objects1));

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Object.values()
console.log(`Object.values() :- The Object.values() method returns an array of a given object's own enumerable property values.`);

console.log('Object Values :- ', Object.values(objects1));