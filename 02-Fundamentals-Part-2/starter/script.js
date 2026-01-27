"use strict";
/*
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverssLicense = true;

// if (hasDriversLicense) console.log("I can drive");

function logger() {
  console.log("My name is Jordan");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

console.log(`${logger()}`);


function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1996);
console.log(age1);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1996);

console.log(age1, age2);


const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 67 - age;
  return `${firstName} retires in ${retirement} years!`;
};

console.log(yearsUntilRetirement(1996));
console.log(yearsUntilRetirement(1996, "Jordan"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

  */

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 67 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jordan"));
console.log(yearsUntilRetirement(1950, "Victor"));
