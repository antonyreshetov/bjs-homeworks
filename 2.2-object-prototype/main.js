function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
    if (animal == "undefined") {
    return "null";
  } else if (animal != "undefined") {
    let sound = animal.sound;
    return sound;
  }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let summ = 0;
    let average;

    for (let i = 0; i < marks.length; i++) {
        summ += Number(marks[i]);
        average = summ / marks.length;
    }

    let roundedAverage = Math.round(average);

    return roundedAverage;
}

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
    let now = Date.now();
    let diff = now - Date.parse(birthday);
    let msInYear = (365*3+366)/4*24*60*60*1000;
    let age = diff / msInYear;

    return (age >= 18);
  }
