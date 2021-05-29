class Centaur {
  constructor(data) {
    this.name = data.name;
    this.breed = data.type;
    this.cranky = false;
    this.standing = true;
    this.activityCount = 0;
  }

  shootBow() {
    this.activityCount++
    this.updateCrankiness()
    return 'Twang!!!'
  }

  run() {
    this.activityCount++
    this.updateCrankiness()
    return 'Clop clop clop clop!!!'
  }

  updateCrankiness() {
    if (this.activityCount >= 3) {
      this.cranky = true;
    }
  }
}

module.exports = Centaur;