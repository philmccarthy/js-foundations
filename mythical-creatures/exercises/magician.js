class Magician {
  constructor(data) {
    this.name = `The Great ${data.name}`;
    this.assistant = data.assistant;
    this.favoriteAccessory = data.clothing ? data.clothing : 'top hat';
    this.confidencePercentage = 10;
  }

  performIncantation(spell) {
    return `${spell.toUpperCase()}!`;
  }

  performTrick() {
    this.confidencePercentage += 10
    if (this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    }
  }

  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant === true) {
      return 'WOW! The magician totally just sawed that person in half!';
    } else {
      return 'Oh no, this trick is not ready!';
    }
  }
}

module.exports = Magician;