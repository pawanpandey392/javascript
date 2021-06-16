// ----------------------- PRIVATE CLASS FIELDS ----------------------- //

// Private Static Fields
class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD = 42

  static publicStaticMethod() {
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD
  }

  publicMethod() {
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD
  }
}
console.log('\nStatic methods can be called with the classname direct :- ');
console.log(ClassWithPrivateStaticField.publicStaticMethod());
console.log('\nNon static methods can only be called after the instantiation of class :- ')
let fieldValue = new ClassWithPrivateStaticField();
console.log(fieldValue.publicMethod());

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Private Instance Fields
class ClassWithPrivateField {
  #privateField

  // #randomField

  constructor() {
    this.#privateField = 42
    console.log(`\nPrivate field '#randomField' must be declared in an enclosing class. Since it is not, so it will throw error.`);
    // this.#randomField = 444
  }
}
const instance = new ClassWithPrivateField();
console.log(`\nTrying to access private perperty from outside the class so it will always be undefined.`);
console.log(`Private field value :- ${instance.privateField}`);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Private Methods - Private Static Methods [Example 1] :- 
class ClassWithPrivateStaticMethod {
  // static #privateStaticMethod() {
  //   return 42
  // }
  static publicStaticMethod1() {
    // return ClassWithPrivateStaticMethod.#privateStaticMethod();
  }
  static publicStaticMethod2() {
    // return this.#privateStaticMethod();
  }
}
console.log(`[class] implement static private methods was added in v8 7.9. That version of v8 was added to Node 13.2.0.`);
console.log(`In node 13.2.0 it's working under --harmony-private-methods flag.`);
console.log(`Below assertion will fail, So will have to test it in the higher version of node js.`);
console.assert(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42);
console.assert(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Private Methods - Private Static Methods [Example 2] :- 
class Base {
  // static #privateStaticMethod() {
  //   return 42;
  // }
  static publicStaticMethod1() {
    // return Base.#privateStaticMethod();
  }
  static publicStaticMethod2() {
    // return this.#privateStaticMethod();
  }
}
class Derived extends Base {}
console.log(Derived.publicStaticMethod1());
console.log(Derived.publicStaticMethod2());

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Private Methods - Private Instance Methods [Example 1] :-
class ClassWithPrivateMethod {
  // #privateMethod() {
  //   return 'hello world'
  // }
  getPrivateMessage() {
    // return this.#privateMethod()
  }
}
const instance1 = new ClassWithPrivateMethod()
console.log(instance1.getPrivateMessage())

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Private Methods - Private Instance Methods [Example 2] :-
class ClassWithPrivateAccessor {
  #message
  // get #decoratedMessage() {
  //   return `✨${this.#message}✨`
  // }
  // set #decoratedMessage(msg) {
  //   this.#message = msg
  // }
  constructor() {
    // this.#decoratedMessage = 'hello world'
    // console.log(this.#decoratedMessage)
  }
}
new ClassWithPrivateAccessor();