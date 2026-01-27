/* let js = "amazing";

//  console.log(40 + 8 + 23 - 10);

console.log("Jordan");
console.log(23);

// Variable name convention
let firstName = "Jordan";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

// Single line comment

/* 

Multi line comments - anything between the astricks will be commented out.



let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jordan");

javaScriptIsFun = "YES";

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1996;
// birthYear = 1990;

//const job;

var job = "programmer";
job = "teacher";

lastName = 'Mendes;
console.log(lastName);

const now = 2026;

const ageJordan = now - 1996;
const ageSamanatha = now - 1997;
const ageAria = now - 2022;
const ageMason = now - 2025;
console.log(ageJordan, ageSamanatha, ageAria, ageMason);

console.log(ageJordan * 2, ageJordan / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName = "jordan";
const lastName = "mendes";

console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10
console.log(x); // 25

x = 10;

x *= 10;
console.log(x); // 100
x /= 10;
console.log(x); // 10

x = 1;

x++;
console.log(x); // 10
x--;
console.log(x); // 10

console.log(ageJordan > ageSamanatha);
console.log(ageSamanatha >= 18);
console.log(ageAria >= 18);

const isFullAge = ageAria >= 18;
console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJordan = now - 1996;
const ageAria = now - 2018;

const averageAge = (ageJordan + ageAria) / 2;

console.log(averageAge);

const firstName = "Jordan";
const job = "teacher";
const birthYear = 1996;
const year = 2026;

const jordan =
  "I'm  " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(jordan);

const jordanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(jordanNew);

console.log(`here is a regular string`);

console.log("string with \n\ multiple \n\ lines");

console.log(`String with
  multiple
  lines`);


const age = 15;

if (age >= 18) {
  console.log(`Sarah can start her driving license`);
} else {
  const yearsLeft = 18 - age;

  console.log(
    `Sarah has ${yearsLeft} years left before she can start her driving license`,
  );
}

const birthYear = 1996;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// type conversion

const inputYear = "1991";
console.log(Number(inputYear));

console.log(Number(inputYear) + 18);

console.log(Number("Jordan"));
console.log(typeof NaN);

console.log(String(23));

// type coercion

console.log("I'm " + 23 + " years old");

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jordan"));
console.log(Boolean({}));
console.log(Boolean(NaN));

const money = 100;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height;

if (height) {
  console.log("Yay! Height is defined!");
} else {
  console.log("Height is undefined!");
}

const age = "18";

if (age === 18) console.log("You just became an adult (Strict)");

if (age == 18) console.log("You just became an adult (Loose)");

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  // '23'
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 , 9, or 7");
}

if (favorite !== 23) console.log("Why not 23?");
*/

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = true;

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}
