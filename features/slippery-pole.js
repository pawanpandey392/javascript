// Slippery Pole Problem
class SlipperyPole {

  constructor (heightOfPole, climbsUpInADay, slipDownAtNight) {
    this.heightOfPole = heightOfPole;
    this.climbsUpInADay = climbsUpInADay;
    this.slipsDownAtNight = slipDownAtNight;
  }

  getSafePoint () {
    return this.heightOfPole - this.climbsUpInADay;
  }

  getDistanceCoveredPerDay () {
    return this.climbsUpInADay - this.slipsDownAtNight;
  }

  calculateTotalDays () {
    // Total days to climb up with one extra step.
    let totalDays = this.getSafePoint() / this.getDistanceCoveredPerDay();

    return ++totalDays;
  }
}

// let slipperPole = new SlipperyPole(50, 3, 2);
// let slipperPole = new SlipperyPole(50, 5, 2);
let slipperPole = new SlipperyPole(50, 10, 0);
console.log(slipperPole.calculateTotalDays());