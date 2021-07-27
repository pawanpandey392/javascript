
class Smartphone {
  add_color() {
    console.log("Adding Colors");
  }
}

const apple = new Smartphone();

// output is: Adding Colors
apple.add_color();

// TypeError: Smartphone.add_color is not a function
Smartphone.add_color();

// When you try to access a method without instantiating the ‘Smartphone’ class, it will result in an error. With the help of static fields, you can now declare a class method using static keyword and call it from outside of a class.

class Smartphone {
  designer(color) {
    this.color = color;
  }
  static create_smartphone(color) {
    return new Smartphone(color);
  }
}

// output is: undefined
const silver = Smartphone.create_smartphone("silver");
