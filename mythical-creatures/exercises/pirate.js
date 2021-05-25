class Pirate {
  constructor(name, job="scallywag") {
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.booty = 0;
    this.shipsRobbed = 0;
  }

  robShip() {
    if (this.cursed) {
      return "ARG! I\'ve been cursed!";
    } else {
      this.booty += 100;
      this.shipsRobbed++;
      if (this.shipsRobbed === 5) {
        this.cursed = true;
      }
      return "YAARRR!";
    }
  }

  liftCurse() {
    if (!this.cursed) {
      return "You don't need to lift a curse!";
    } else if (this.booty >= 300 && this.cursed) {
      this.booty -= 300;
      this.cursed = false;
      return "Your curse has been lifted!"
    } else {
      return "Not enough booty to lift your curse!"
    }
  }
}

module.exports = Pirate;