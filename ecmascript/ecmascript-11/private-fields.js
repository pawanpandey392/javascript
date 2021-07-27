
class Smartphones {
  #phone_color = "silver";
  designer(name) {
    this.name = name;
  }

  get_color() {
    return this.#phone_color;
  }
}
const iPhone = new Smartphones("iPhone");

// output is: silver
console.log(iPhone.get_color());

// output is: Private field '#phone_color' must be declared in an enclosing class
console.log(iPhone.#phone_color) 