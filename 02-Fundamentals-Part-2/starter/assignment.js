"use strict";

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
