function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    let now = new Date();
    date = new Date(date);
    let numberOfMonth = (date.getFullYear() - now.getFullYear()) * 12 + (date.getMonth() - now.getMonth());
    date = numberOfMonth;
    console.log(date);

    for (let i = 0; i < 4; i++) {
        if (typeof(Number(arguments[i])) != "number" || isNaN(arguments[i])) {
              let argument;
              switch(i) {
                  case 0:
                  argument = "Процентная ставка";
                  break;

                  case 1:
                  argument = "Начальный взнос";
                  break;

                  case 2:
                  argument = "Общая стоимость";
                  break;

                  case 3:
                  argument = "Срок ипотеки";
                  break;

                  default:
                  break;
            }

            return `Параметр ${argument} содержит неправильное значение ${arguments[i]}`;
          }
        }

    let debt = amount - contribution;
    let mounthlyPercent = percent / 100 / 12;
    let monthlyPayment = debt*(mounthlyPercent+mounthlyPercent/((Math.pow((1+mounthlyPercent), date))-1));
    let totalAmount = (monthlyPayment * date).toFixed(2);

    console.log(totalAmount);
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let alias;
    if (name === null || name === undefined || name === "") {
    alias = "Аноним";
  } else {
    alias = name;
  }

    let greeting = `Привет, мир! Меня зовут ${alias}.`;
    console.log(greeting);
    return greeting;
}
