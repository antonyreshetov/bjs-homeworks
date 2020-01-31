

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    "use strict";
    let d = Math.pow(b, 2) - 4*a*c, x, x1;
    if (d < 0) {
      return[];
    } else if (d == 0) {
      x = -b / 2*a;
      return[x];
    } else {
      x = -b - Math.sqrt(d) / 2*a;
      x1 = -b + Math.sqrt(d) / 2*a;
      return[x, x1];
    }
    };
    getResult(2, 4, 3);

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
  marks = [2, 3, 5, 4, 2, 4, 5];
  if (marks.length > 5) {
      console.log("Превышено максимальное количество оценок!");
      marks = marks.slice(0, 5);
      for (i = 0; i < marks.length; i++) {
      summ += marks[i];
      averageMark = summ / marks.length;
    }
  }
  console.log(averageMark);
}
let summ = 0;
let averageMark;
let marks;
getAverageMark(marks);

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
  let today = new Date;
  let year = today.getFullYear()
    if (year - dateOfBirthday >= 18) {
      console.log("Не желаете ли олд-фэшн, " + name + "?");
    } else {
      console.log("Сожалею, " + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!");
    }
}
let name = "Anton";
let dateOfBirthday = 2008;
askDrink(name, dateOfBirthday);
