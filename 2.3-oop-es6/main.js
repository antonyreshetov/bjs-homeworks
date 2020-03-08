// task1
class Weapon {
  constructor (name, attack, durability, range) {
    this.originalDurability = durability;
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
  };

  takeDamage(damage) {
    this.durability -= damage;
    if (this.durability < 0) {
      this.durability = 0
      }
  };

  getDamage() {
    if (this.durability == 0) {
      this.attack = 0;
    } else if (this.durability < this.originalDurability * 0.3) {
      this.attack = this.attack/2;
    } else {
      this.attack;
    }
    return this.attack;
  }

  isBroken() {
    if (this.durability === 0) {
      return true
    } else {
      return false
    }
  }
}

const hand = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const stick = new Weapon('Посох', 8, 300, 2);

const longBow = new Weapon('Длинный лук', 15, bow.durability, 4);
const poleaxe = new Weapon('Секира', 27, 800, sword.range);
const stormStick = new Weapon('Посох Бури', 10, stick.durability, 3);

// task2
class Hand extends Weapon {
  constructor() {
    super('Рука', 1, Infinity, 1);
  }
}

class Bow extends Weapon {
  constructor() {
    super('Лук', 10, 200, 3);
    }
}

class Sword extends Weapon {
  constructor() {
    super('Меч', 25, 500, 1);
    }
}

class Knife extends Weapon {
  constructor() {
    super('Нож', 5, 300, 1);
    }
}

class Stick extends Weapon {
  constructor() {
    super('Посох', 8, 300, 2);
    }
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = "Длинный лук";
    this.attack = 15;
    this.range = 4;
    }
}

class Poleaxe extends Sword {
  constructor() {
    super();
    this.name = "Секира";
    this.attack = 27;
    this.durability = 800;
    }
}

class StormStick extends Stick {
  constructor() {
    super();
    this.name = "Посох Бури";
    this.attack = 10;
    this.range = 3;
    }
}

// task3
class StudentLog {
  constructor(name) {
  this.name = name;
  this.marks = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {

    if (grade > 0 && grade < 6 && Number.isInteger(grade)) {
      if (this.marks[subject] === undefined) {
        this.marks[subject] = [grade];
        } else {
        this.marks[subject].push(grade);
        }
      } else {
        console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
      }
  }

    getAverageBySubject(subject) {
      if (this.marks[subject] === undefined) {
        return 0
      } else {
        let sumMarks = 0;
        for (let mark of this.marks[subject]) {
          sumMarks += mark;
        }
        return sumMarks / this.marks[subject].length;
      }
    }

    getTotalAverage() {
      if (Object.keys(this.marks).length === 0) {
        return 0;
      } else {
        let sumAverage = 0;
        for (let subject in this.marks) {
          sumAverage += this.getAverageBySubject(subject);
        }
        return sumAverage / Object.keys(this.marks).length;
      }
  }
}
