// Classes Examples
class Profile {
  constructor () {
    this.name = 'Bonnie Bennette';
  }
}

class AlternateProfile extends Profile {
  constructor () {
    super();
    this.name = 'Elena Gilbert';
  }
}
console.log(new Profile().name);
console.log(new AlternateProfile().name);

console.log(`\n----------------- SEPARATOR -----------------\n`);

// Extends Example
class DateFormatter extends Date {
  getFormattedDate() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}
console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());

console.log(`\n----------------- SEPARATOR -----------------\n`);
// -------------------------- PRACTICE -------------------------- //

// Private Access Identifiers
class AlienShipPrivateClass {

  // Private Static Property
  static #ALIEN_SHIP_NAME = 'Boracco Tokatapa';

  // Static Property
  static ALIEN_SHIP_PLANET = 'LokaQuotaPota NapuToraku';

  // Private Property
  #ALIEN_AVATAR = 'zupataroka-kapta.jpg';

  // Public Property
  ALIEN_NAME = 'Zupataroka Kapta';

  constructor () {
    this.getAlienName = this.ALIEN_NAME;
    this.getAlienShipName = AlienShipPrivateClass.#ALIEN_SHIP_NAME;
    this.getAlienAvatar = this.#ALIEN_AVATAR;
    this.getAlienPlanetName = AlienShipPrivateClass.ALIEN_SHIP_PLANET;
  }
}
let alienShip = new AlienShipPrivateClass();
console.log('\nAlien Class :- ');
console.log('Alien Name :- ' + alienShip.getAlienName);
console.log('Alien Ship Name :- ' + alienShip.getAlienShipName);
console.log('Alien Avatar :- ' + alienShip.getAlienAvatar);
console.log('Alien Planet Name :- ' + alienShip.getAlienPlanetName);