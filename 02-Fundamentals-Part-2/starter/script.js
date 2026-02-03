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


const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["MIchael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jordan";

const jordan = [firstName, "Mendes", 2037 - 1991, "teacher", friends];

console.log(jordan);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);


const friends = ["Michael", "Steven", "Peter"];
let newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}


const jordanArray = [
  "Jordan",
  "Mendes",
  2037 - 1996,
  "Teacher",
  ["Samantha", "Aria", "Mason"],
];

const jordan = {
  firstName: "Jordan",
  lastName: "Mendes",
  age: 2037 - 1996,
  job: "teacher",
  friends: ["Samantha", "Aria", "Mason"],
};

console.log(jordan.lastName);
console.log(jordan["lastName"]);

const nameKey = "Name";
console.log(jordan["first" + nameKey]);
console.log(jordan["last" + nameKey]);

// let interestedIn = prompt(
//   "What do you want to know about Jordan? Choose between firstName, lastName, age, job, and friends",
// );

// if (jordan[interestedIn]) {
//   console.log(jordan[interestedIn]);
// } else {
//   interestedIn = prompt(
//     "Wrong request! What do you want to know about Jordan? Choose between firstName, lastName, age, job, and friends",
//   );
// }

jordan.location = "United States";
jordan["discord"] = "waterwedoin";

console.log(jordan);

// Challenge

console.log(
  `${jordan.firstName} has ${jordan.friends.length} friends, and his best friend is called ${jordan.friends[0]}`,
);


const jordan = {
  firstName: "Jordan",
  lastName: "Mendes",
  birthYear: 1996,
  job: "manager",
  friends: ["Samantha", "Aria", "Mason"],
  hasDriversLicense: true,

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriversLicense ? "has" : "does not have"} a drivers license`;
  },
};

console.log(jordan.calcAge());

console.log(jordan.age);
console.log(jordan.age);
console.log(jordan.age);

console.log(jordan.getSummary());


// console.log("Lifting weights repetition 1");

for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i}`);
}


const jordanArray = [
  "Jordan",
  "Mendes",
  2037 - 1996,
  "Teacher",
  ["Samantha", "Aria", "Mason"],
  true,
];

let types = [];

for (let i = 0; i < jordanArray.length; i++) {
  console.log(jordanArray[i], typeof jordanArray[i]);
  types.push(typeof jordanArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

let ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// contunue and break
console.log("--------- ONLY STRINGS ----------");

for (let i = 0; i < jordanArray.length; i++) {
  if (typeof jordanArray[i] !== "string") continue;

  console.log(jordanArray[i], typeof jordanArray[i]);
}

console.log("--------- BREAK WITH NUMBER ----------");

for (let i = 0; i < jordanArray.length; i++) {
  if (typeof jordanArray[i] === "number") break;

  console.log(jordanArray[i], typeof jordanArray[i]);
}


const jordan = [
  "Jordan",
  "Mendes",
  2037 - 1996,
  "Teacher",
  ["Samantha", "Aria", "Mason"],
  true,
];

for (let i = jordan.length - 1; i >= 0; i--) {
  console.log(jordan[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting excerise ${exercise}---------`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
  }
}


// let set = 1;
//   for (let rep = 1; rep < 2; rep++) {
  //     console.log(`Lifting weights repetition ${rep}`);
  //   }
  // }
  
  */
