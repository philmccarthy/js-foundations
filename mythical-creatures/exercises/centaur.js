class Centaur {
  constructor(data) {
    this.name = data.name;
    this.breed = data.type;
    this.cranky = false;
    this.standing = true;
    this.activityCount = 0;
    this.layingDown = false;
  }

  shootBow() {
    if (this.cranky || this.layingDown) return 'NO!';
    this.activityCount++;
    this.updateCrankiness();
    return 'Twang!!!';
  }

  run() {
    if (this.cranky || this.layingDown) return 'NO!';
    this.activityCount++;
    this.updateCrankiness();
    return 'Clop clop clop clop!!!';
  }

  updateCrankiness() {
    if (this.activityCount >= 3) {
      this.cranky = true;
    }
  }

  sleep() {
    if (this.standing) {
      return 'NO!';
    } else {
      this.cranky = false;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.layingDown = true;
    this.standing = false;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.layingDown) return "Not while I'm laying down!"
    this.cranky = false;
  }
}

module.exports = Centaur;