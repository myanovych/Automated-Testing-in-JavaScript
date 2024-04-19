class Animal {
  constructor(animalName) {
    this.animalName = animalName;
  }

  move() {
    console.log(this.animalName + ' is moving');
  }
}

class Cat extends Animal {
  constructor(animalName) {
    super(animalName);
  }
}

const frisky = new Cat('frisky');
frisky.move();