
// Classes Static
class ClassWithStaticMethod {

  static staticProperty = 'someValue';

  static staticMethod() {
    return 'static method has been called.';
  }

}
console.log(ClassWithStaticMethod.staticProperty);
console.log(ClassWithStaticMethod.staticMethod());

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Using Static Members in Classes
console.log(`\nUsing Static Members in Classes :- `);
class Triple {
  static customName = 'Tripler';
  static description = 'I triple any number you provide';
  static triple(n = 1) {
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static longDescription;
  static description = 'I square the triple of any number you provide';
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}
console.log(Triple.description);
console.log(Triple.triple());
console.log(Triple.triple(6));
console.log(`\n`);
var tp = new Triple();

console.log(BiggerTriple.triple(3));
console.log(BiggerTriple.description);
console.log(BiggerTriple.longDescription);
console.log(BiggerTriple.customName);
console.log(`\n`);
// console.log(tp.triple());

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Calling Static Members from Another Static Method
console.log(`\nCalling Static Members from Another Static Method :- `);
console.log(`\nIn order to call a static method or property within another static method of the same class, you can use the this keyword.`);
class StaticMethodCall {
  static staticProperty = 'static property';
  static staticMethod() {
    return 'Static method and ' + this.staticProperty + ' has been called';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' from another static method';
  }
}
console.log('\nStatic method and static property has been called. :- ');
StaticMethodCall.staticMethod();
console.log('\nStatic method and static property has been called from another static method. :- ');
StaticMethodCall.anotherStaticMethod();

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Calling static members from a class constructor and other methods.
console.log(`\nCalling static members from a class constructor and other methods.`);
console.log(`\nStatic members are not directly accessible using the this keyword from non-static methods. You need to call them using the class name: CLASSNAME.STATIC_METHOD_NAME() / CLASSNAME.STATIC_PROPERTY_NAME or by calling the method as a property of the constructor: this.constructor.STATIC_METHOD_NAME() / this.constructor.STATIC_PROPERTY_NAME`);
class StaticMethodCall1 {
  constructor() {
    console.log(StaticMethodCall1.staticProperty);
    console.log(this.constructor.staticProperty);
    console.log(StaticMethodCall1.staticMethod());
    console.log(this.constructor.staticMethod());
  }

  static staticProperty = 'static property';

  static staticMethod() {
    return 'static method has been called.';
  }
}
