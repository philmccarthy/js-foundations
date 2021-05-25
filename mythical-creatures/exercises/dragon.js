class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.eat_count = 0;
    this.hungry = true;
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }

  eat() {
    this.eat_count++;
    this.updateHunger();
  }

  updateHunger() {
    if (this.eat_count >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
