// ----------------------- PUBLIC CLASS FIELDS ----------------------- //

// Syntax
class ClassWithInstanceField1 {
  instanceField = 'instance field'
}

class ClassWithStaticField1 {
  static staticField = 'static field'
}

class ClassWithPublicInstanceMethod1 {
  publicMethod() {
    return 'hello world'
  }
}

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Public Static Fields
// Example 1 
class ClassWithStaticField {
  static staticField = 'Boracco Tokatapa'
}
console.log(ClassWithStaticField.staticField)

console.log(`\nFields without initializers are initialized to undefined.`);
class ClassWithStaticField2 {
  static staticField
}
// console.assert(ClassWithStaticField2.hasOwnProperty('staticField'));
console.log(ClassWithStaticField2.hasOwnProperty('staticField'));
console.log(ClassWithStaticField2.staticField);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Example 2 
console.log(`\nPublic static fields are not reinitialized on subclasses, but can be accessed via the prototype chain.`);
class ClassWithStaticField3 {
  static baseStaticField = 'base field'
}

class SubClassWithStaticField extends ClassWithStaticField3 {
  static subStaticField = 'sub class field'
}
console.log(SubClassWithStaticField.subStaticField);
console.log(SubClassWithStaticField.baseStaticField);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Example 3
console.log(`\nWhen initializing fields, 'this' refers to the class constructor. You can also reference it by name, and use super to get the superclass constructor (if one exists).`);
class ClassWithStaticField4 {
  static baseStaticField = 'base static field'
  static anotherBaseStaticField = this.baseStaticField

  static baseStaticMethod() { return 'base static method output' }
}

class SubClassWithStaticField1 extends ClassWithStaticField4 {
  static subStaticField = super.baseStaticMethod()
}
console.log(ClassWithStaticField4.anotherBaseStaticField);
console.log(SubClassWithStaticField1.subStaticField);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Public Instance Fields
// Example 1
class ClassWithInstanceField {
  instanceField = 'instance field'
}
console.log(`\n`);
const instance = new ClassWithInstanceField();
console.log(instance.instanceField);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Example 2
class ClassWithInstanceField2 {
  instanceField
}
const instances = new ClassWithInstanceField2()
console.log(`\nFields without initializers are initialized to undefined.`);
console.assert(instances.hasOwnProperty('instanceField'))
console.log(instances.instanceField)

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Example 3
const PREFIX = 'prefix';
class ClassWithComputedFieldName {
    [`${PREFIX}Field`] = 'prefixed field value'
}
const instance3 = new ClassWithComputedFieldName()
console.log(`\nLike properties, field names may be computed.`);
console.log(instance3.prefixField)

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Example 4 
class ClassWithInstanceField3 {
  baseInstanceField = 'base field'
  anotherBaseInstanceField = this.baseInstanceField
  baseInstanceMethod() { return 'base method output' }
}

class SubClassWithInstanceField3 extends ClassWithInstanceField3 {
  subInstanceField = super.baseInstanceMethod()
}
const base = new ClassWithInstanceField3();
const sub = new SubClassWithInstanceField3();
console.log(`\nWhen initializing fields 'this' refers to the class instance under construction. Just as in public instance methods, if you're in a subclass you can access the superclass prototype using super.\n`);
console.log(base.anotherBaseInstanceField);
console.log(sub.subInstanceField);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Public Methods
// Example 1
console.log('\nPublic Static Methods :- ');
class ClassWithStaticMethod {
  static staticMethod() {
    return 'static method has been called.';
  }
}
console.log(ClassWithStaticMethod.staticMethod());

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Example 2
console.log('\nPublic Instance Methods :- ');
class ClassWithPublicInstanceMethod {
  publicMethod() {
    return 'hello world'
  }
}
const instance4 = new ClassWithPublicInstanceMethod()
console.log(instance4.publicMethod())

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Example 3
console.log(`\nInside instance methods, this refers to the instance itself. In subclasses, super lets you access the superclass prototype, allowing you to call methods from the superclass.`);
class BaseClass {
  msg = 'hello world'
  basePublicMethod() {
    return this.msg
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod()
  }
}
const instance5 = new SubClass()
console.log(instance5.subPublicMethod())

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Example 4
console.log(`\nGetters and setters are special methods that bind to a class property and are called when that property is accessed or set. Use the get and set syntax to declare a public instance getter or setter.`);
class ClassWithGetSet {
  #msg = 'hello world'
  get msg() {
    return this.#msg
  }
  set msg(x) {
    this.#msg = `hello ${x}`
  }
}
const instance6 = new ClassWithGetSet();
console.log(instance6.msg);
instance6.msg = 'cake'
console.log(instance6.msg);
