"use strict";

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgScoreDolphins1 = calcAverage(44, 23, 71);
const avgScoreKoalas1 = calcAverage(65, 54, 49);

const avgScoreDolphins2 = calcAverage(85, 54, 41);
const avgScoreKoalas2 = calcAverage(23, 34, 27);

function checkWinner(avgScoreDolphins, avgScoreKoalas) {
  if (avgScoreDolphins >= avgScoreKoalas * 2) {
    console.log(`Dolphins have won!`);
  } else if (avgScoreKoalas >= avgScoreDolphins * 2) {
    console.log(`Koalas have won!`);
  } else {
    console.log("No one has won!");
  }
}

checkWinner(avgScoreDolphins1, avgScoreKoalas1);
checkWinner(avgScoreDolphins2, avgScoreKoalas2);


const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

const firstName = "Jordan";
const lastName = "Mendes";

console.log(fullName(firstName, lastName));

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [tips[0] + 125, tips[1] + 555, tips[2] + 44];

console.log(bills, tips, totals);

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(
  `${john.calcBMI() > mark.calcBMI() ? john.fullName : mark.fullName}'s BMI (${john.calcBMI() > mark.calcBMI() ? john.bmi : mark.bmi}) is higher than ${john.calcBMI() > mark.calcBMI() ? mark.fullName : john.fullName}'s BMI (${john.calcBMI() > mark.c)alcBMI() ? mark.bmi : john.bmi}})!`,
);


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcAvg = function (totals) {
  let sum;

  for (let i = 0; i < totals.length; i++) {
    sum = sum += totals[i];
  }

  return sum / totals.length;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);

  console.log("tips = ", tips, "totals = ", totals);
}

const billAvg = calcAvg(totals);


const temperatures1 = [3, -2, -6, -1, "error"];

const temperatures2 = [9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let low = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < low) low = curTemp;
  }

  return max - low;
};

const amplitude = calcTempAmplitude(temperatures1, temperatures2);

console.log(amplitude);


const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

function printForecast(temps) {
  const outputArray = [];

  for (let i = 0; i < temps.length; i++) {
    str = str += outputArray.push(`... ${temps[i]}C in ${i + 1} days`);
  }

  let output;

  outputArray.forEach((x) => (output ? (output += x) : (output = x)));

  console.log(output);
}

printForecast(temps1);
printForecast(temps2);

*/
