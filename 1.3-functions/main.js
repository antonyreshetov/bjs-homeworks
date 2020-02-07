//task1
function getSolutions( a, b, c ) {
  let d = b*b - 4*a*c;
  if (d < 0) {
    return { D: d }
  } else if (d == 0) {
    let x1 = -b / (2*a);
    return { roots: [ x1 ], D: d }
  } else {
    let x1 = (-b + Math.sqrt(d)) / (2*a);
    let x2 = (-b - Math.sqrt(d)) / (2*a);
    return { roots: [ x1, x2 ], D: d }
  }
};

function showSolutionsMessage( a, b, c ) {
  let result = getSolutions( a, b, c );
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log("Значение дискриминанта: " + result.D);
  if (result.D < 0) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (result.D == 0) {
    console.log("Уравнение имеет один корень X₁ = " + result.roots);
  } else {
    console.log("Уравнение имеет два корня. X₁ = " + result.roots[0] + " , X₂ = " + result.roots[1])
  }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

//task2
function getAverageScore(data) {
  let result = {};
  let averageFromAverages = [];

  for (let marks in data) {
    result[marks] = getAverageMark(data[marks]);
    averageFromAverages.push(getAverageMark(data[marks]));
  }

  result.average = getAverageMark(averageFromAverages);

  function getAverageMark(arr) {
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
    }
    return summ / arr.length;
  }

  return result;
}

getAverageScore({algebra: [2, 5, 4], russian: [3, 3, 5], biology: [5, 4, 3]});

//task3
function getPersonData(secretData) {
  let piratName = {};

  for (let key in secretData) {
    if (key == "aaa") {
      piratName.firstName = convert(secretData[key]);
    } else if (key == "bbb") {
      piratName.lastName = convert(secretData[key]);
    }
  }

  function convert(num) {
    if (num == 1) {
      return "Родриго";
    } else {
      return "Эмилио";
    }
  }

  return piratName;
}

getPersonData({aaa: 1, bbb: 0});
